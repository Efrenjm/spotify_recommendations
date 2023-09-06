// import path from "path";s
// path.resolve(__dirname,'')

const clientId = 'f98eaedadf68425b99738517ee1f45cd';
const url = 'http://localhost:5173/';
const redirect_uri = url + 'v';
const scope = 'user-read-private user-read-email user-top-read';

//PRIVATE FUNCTIONS:

  //  Random string for code challenge.
const generateRandomString = (length)=>{
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

  //  Encrypt random script
const generateCodeChallenge = async (codeVerifier)=> {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
}


//PUBLIC FUNCTIONS:

  //  Send client to Spotify to authorize
const generateCodeVerifier = ()=>{

  const codeVerifier = generateRandomString(128);

  generateCodeChallenge(codeVerifier).then( (codeChallenge) => {
    const state = generateRandomString(16);
    
    localStorage.setItem('code_verifier', codeVerifier);

    let args = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge
    });
    
    window.location = 'https://accounts.spotify.com/authorize?' + args;
  })
}

  //  Generate or refresh access token
const tokenize = async ()=>{
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const codeVerifier = localStorage.getItem('code_verifier');

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirect_uri,
    client_id: clientId,
    code_verifier: codeVerifier
  });
      // Send request API request to tokenize
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body,
  });
  const data = await response.json();

  return data;
}

const refreshToken = async ()=>{
  // const token = localStorage.getItem('access_token');
  let token = 'BQB2t-yeMvF9BiOrJNBsDoCswYjbr9h_HVVBBuve3YYAEOY7EwOCP4qwyqv-J0kA6Lb0xJG1yt0w6GXDR0CEP_haWNZxdspOFHaKNt-Ct59NVbgijwHOMM3bxRFMeJGEAJ2bOfs0kssC64fqyOUu444ZrWhmK09H-MbriH2EjqVP1_5vavbyqiSUIigIIqXM8BS6VeSRNukImg'
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: token,
    client_id: clientId,
  });
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body,
  });
  const data = await response.json();
  localStorage.setItem('access_token', data.access_token);
  return data.access_token;
}

export { generateCodeVerifier, refreshToken, tokenize }