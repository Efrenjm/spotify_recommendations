import TrackContainer from "../../molecules/ElementContainer/ElementContainer";
import { Title } from "../../atoms/Text/Text";

function ElementsTable(props) {
  const top = `Top ${props.tracks.length} Tracks`
  return (
    <>
      <div style={{
        "background-color" : "black",
        "padding" : "20px",
        "border-radius" : "20px"
      }}>
        <div style={{
          "text-align" : "center",
          "padding" : "20px 0",
          // "margin" : "0"
        }}>
          <Title>{top}</Title>
        </div>
        <div  style={{
          "display" : "flex",
          "flex-direction" : "column",
          "gap" : "3px"

        }}>

          {
            props.tracks.map((track)=>{
              return <TrackContainer  id = {track.id}
                                      imgSrc = {track.album.images[2].url}
                                      title = {track.name}
                                      subtitle = {track.artists[0].name}>
                      </TrackContainer>
            })
          }
        </div>
      </div>
    </>
  )
}

export default ElementsTable