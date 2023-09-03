
import { Link } from 'react-router-dom'
import TrackContainer from './components/molecules/ElementContainer/ElementContainer'
import ElementsTable from './components/template/ElementsTable/ElementsTable'
// import TrackContainer from './components/molecules/ElementContainer/ElementContainer'

function App() {
  // const [count, setCount] = useState(0)
  // const artists = [
  //   {
  //     external_urls: {spotify: "https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS"},
  //     followers: {href: null, total: 0},
  //     genres: ["irish singer-songwriter", "modern rock", "pop", "pov: indie"],
  //     href: "https://api.spotify.com/v1/artists/2FXC3k01G6Gw61bmprjgqS",
  //     id: "2FXC3k01G6Gw61bmprjgqS",
  //     images: [{height: 640, url: "https://i.scdn.co/image/ab6761610000e5ebad85a585103dfc2f3439119a", width: 640}, {height: 320, url: "https://i.scdn.co/image/ab67616100005174ad85a585103dfc2f3439119a", width: 320}, {height: 160, url: "https://i.scdn.co/image/ab6761610000f178ad85a585103dfc2f3439119a", width: 160}],
  //     name: "Hozier",
  //     popularity: 81,
  //     type: "artist",
  //     uri: "spotify:artist:2FXC3k01G6Gw61bmprjgqS",
  //   },
  //   {
  //     external_urls: {spotify: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"},
  //     followers: {href: null, total: 0},
  //     genres: ["garage rock", "modern rock", "permanent wave", "rock", "sheffield indie"],
  //     href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
  //     id: "7Ln80lUS6He07XvHI8qqHH",
  //     images: [{height: 640, url: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f", width: 640}, {height: 320, url: "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f", width: 320}, {height: 160, url: "https://i.scdn.co/image/ab6761610000f1787da39dea0a72f581535fb11f", width: 160}],
  //     name: "Arctic Monkeys",
  //     popularity: 84,
  //     type: "artist",
  //     uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
  //   },
  //   {
  //     external_urls: {spotify: "https://open.spotify.com/artist/4boI7bJtmB1L3b1cuL75Zr"},
  //     followers: {href: null, total: 0},
  //     genres: ["latin alternative"],
  //     href: "https://api.spotify.com/v1/artists/4boI7bJtmB1L3b1cuL75Zr",
  //     id: "4boI7bJtmB1L3b1cuL75Zr",
  //     images: [{height: 640, url: "https://i.scdn.co/image/ab6761610000e5eb2a89a5ad55e1cb241440afef", width: 640}, {height: 320, url: "https://i.scdn.co/image/ab676161000051742a89a5ad55e1cb241440afef", width: 320}, {height: 160, url: "https://i.scdn.co/image/ab6761610000f1782a89a5ad55e1cb241440afef", width: 160}],
  //     name: "Mon Laferte",
  //     popularity: 71,
  //     type: "artist",
  //     uri: "spotify:artist:4boI7bJtmB1L3b1cuL75Zr",
  //   }
  // ]
  const tracks = [
    {
      album: {
        album_type: "ALBUM",
        artists: [{}],
        available_markets: ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR"],
        external_urls: {spotify: "https://open.spotify.com/album/5sY6UIQ32GqwMLAfSNEaXb"},
        href: "https://api.spotify.com/v1/albums/5sY6UIQ32GqwMLAfSNEaXb",
        id: "5sY6UIQ32GqwMLAfSNEaXb",
        images: [
          {height: 640, url: "https://i.scdn.co/image/ab67616d0000b27326b7dd89810cc1a40ada642c", width: 640},
          {height: 300, url: "https://i.scdn.co/image/ab67616d00001e0226b7dd89810cc1a40ada642c", width: 300},
          {height: 64, url: "https://i.scdn.co/image/ab67616d0000485126b7dd89810cc1a40ada642c", width: 64}, 
        ],
        name: "Circles",
        release_date: "2020-01-17",
        release_date_precision: "day",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:5sY6UIQ32GqwMLAfSNEaXb",
      },
    
      artists: [{
        external_urls: {spotify: "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U"},
        href: "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
        id: "4LLpKhyESsyAXpc4laK94U",
        name: "Mac Miller",
        type: "artist",
        uri: "spotify:artist:4LLpKhyESsyAXpc4laK94U",
      }],
      available_markets: ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR"],
      disc_number: 1,
      duration_ms: 209440,
      explicit: true,
      external_ids: {isrc: "USWB11801009"},
      external_urls: {spotify: "https://open.spotify.com/track/2hwOoMtWPtTSSn6WHV7Vp5"},
      href: "https://api.spotify.com/v1/tracks/2hwOoMtWPtTSSn6WHV7Vp5",
      id: "2hwOoMtWPtTSSn6WHV7Vp5",
      is_local: false,
      name: "Blue World",
      popularity: 76,
      preview_url: "https://p.scdn.co/mp3-preview/6029a4927696bc51890533f79ed9c54194584388?cid=8aeeac79eb604c54a9d9dd4660deff34",
      track_number: 3,
      type: "track",
      uri: "spotify:track:2hwOoMtWPtTSSn6WHV7Vp5",
    },
    {
      album: {
        album_type: "SINGLE",
        artists: [{}],
        available_markets: ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR"],
        external_urls: {spotify: "https://open.spotify.com/album/3MKb4ekNen2vqB3AimRKeZ"},
        href: "https://api.spotify.com/v1/albums/3MKb4ekNen2vqB3AimRKeZ",
        id: "3MKb4ekNen2vqB3AimRKeZ",
        images: [
          {height: 640, url: "https://i.scdn.co/image/ab67616d0000b27390bea38223cf774efc7e59d7", width: 640},
          {height: 300, url: "https://i.scdn.co/image/ab67616d00001e0290bea38223cf774efc7e59d7", width: 300},
          {height: 64, url: "https://i.scdn.co/image/ab67616d0000485190bea38223cf774efc7e59d7", width: 64},
        ],
        name: "La Cátedra",
        release_date: "2017-06-20",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:3MKb4ekNen2vqB3AimRKeZ",
      },

      artists: [{
        external_urls: {spotify: "https://open.spotify.com/artist/5GcWBUX00IPuWVGMIRK1sS"},
        href: "https://api.spotify.com/v1/artists/5GcWBUX00IPuWVGMIRK1sS",
        id: "5GcWBUX00IPuWVGMIRK1sS",
        name: "Residente",
        type: "artist",
        uri: "spotify:artist:5GcWBUX00IPuWVGMIRK1sS"
      }],
      available_markets: ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR"],
      disc_number: 1,
      duration_ms: 720000,
      explicit: false,
      external_ids: {isrc: "USQX91701405"},
      external_urls: {spotify: "https://open.spotify.com/track/5iZxLtBUcoQPXSO2iDERp1"},
      href: "https://api.spotify.com/v1/tracks/5iZxLtBUcoQPXSO2iDERp1",
      id: "5iZxLtBUcoQPXSO2iDERp1",
      is_local: false,
      name: "La Cátedra",
      popularity: 54,
      preview_url: "https://p.scdn.co/mp3-preview/961319b5f70f2d2407d3d80db3e4059918b62b1a?cid=8aeeac79eb604c54a9d9dd4660deff34",
      track_number: 1,
      type: "track",
      uri: "spotify:track:5iZxLtBUcoQPXSO2iDERp1",
    }
  ]
  

  return (
    <>
      <div>
        <Link to="./tops">Go to tops</Link>
      </div>

      <ElementsTable tracks={tracks}></ElementsTable>
    {/* {
      tracks.map((track)=>{
        return <TrackContainer trackId={track.id}
                                imgSrc={track.album.images[2].url}
                                title={track.name}
                                artist={track.artists[0].name}>
              </TrackContainer>
      })
    } */}
      {/* <ElementsTable>

      </ElementsTable> */}
      {/* <TrackContainer imgSrc="https://picsum.photos/42/42"
                      title="Nombre de canción muy larga con más palabras"
                      artist="Nombre de artista"
      ></TrackContainer> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
