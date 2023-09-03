const urlParams = new URLSearchParams(window.location.search);

const localhost = 'http://localhost:5500/'

let err = urlParams.get('error');
if(err){
    window.location = localhost + 'pages/accessDenied.html';
}else{

    const clientId = '8aeeac79eb604c54a9d9dd4660deff34';
    const redirect_uri = localhost + 'pages/decision.html';
    
    let code = urlParams.get('code');
    let codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
        client_id: clientId,
        code_verifier: codeVerifier
    });

   fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('access_token', data.access_token);
        window.location = localhost + 'pages/listen.html';
    })
    .catch(error => {
        console.error('Error: ', error);
    });
}

