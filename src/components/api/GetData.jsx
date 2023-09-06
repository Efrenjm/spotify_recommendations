// import { refreshToken } from "./Authorize";
// const clientId = 'f98eaedadf68425b99738517ee1f45cd';
const baseUri = 'https://api.spotify.com/v1/';

const term = 'medium_term'; //change for state
const limit = 50;


const getProfile = async ()=>{
  const token = localStorage.getItem('access_token');
  const auth = 'Bearer ' + token;
  let url = baseUri + 'me';

  const response = await fetch(url, {
    headers: { Authorization: auth }
  });

  if(!response.ok){
    throw new Error('HTTP status ' + response.status);
  }

  const data = await response.json();
  
  const username = data.display_name;
  const profPic = data.images[1].url;     //[0] -> 64*64, [1] -> 300*300
  const product = data.product;           // premium or what

  return { username, profPic, product }
}

const getArtists = async (term)=>{
  console.log(term)
  // const term = 'short_term'; //change for state
  // const limit = 10;
  const token = localStorage.getItem('access_token');
  const auth = 'Bearer ' + token;
  const params = new URLSearchParams({
    time_range : term,
    limit : limit,
  });
  console.log(params)
  const url = baseUri + 'me/top/artists?' + params;

  const response = await fetch(url,{ headers: { Authorization: auth }});
  if (!response.ok) throw new Error('HTTP status ' + response.status);

  let artists = [];
  const data = await response.json();

  for(let artist of data.items){
    let obj = {
      id : artist.id,
      name : artist.name,
      image : artist.images[0].url,
      genres : artist.genres,
      popularity : artist.popularit,
    };
    artists.push(obj);
  }
  return artists;
}

const getTracks = async (term)=>{
  const token = localStorage.getItem('access_token');
  const auth = 'Bearer ' + token;
  const params = new URLSearchParams({
    time_range : term,
    limit : limit,
  });
  const url = baseUri + 'me/top/tracks?' + params;
  
  const response = await fetch(url,{ headers: { Authorization: auth }});
  if(!response.ok)  throw new Error('HTTP status ' + response.status);
  
  let tracks = [];
  const data = await response.json();

  for( let track of data.items ){
    let obj = {
      id : track.id,
      name : track.name,
      image : track.album.images[2].url,
      popularity : track.popularity,
      duration_ms : track.duration_ms,
      artists : track.artists.map((artist)=>{ return {id:artist.id, name:artist.name} }),
      album :  {id:track.album.id, name:track.album.name, image:track.album.images[0].url},
    };
    tracks.push(obj);
  }
  return tracks;
}

const getData = async ({term='short_term'})=>{
  // console.log()
    const data = {
      profile : await getProfile(),
      artists : await getArtists(term),
      tracks : await getTracks(term)
    };
    return data
}

export  {getData,getArtists,getTracks};