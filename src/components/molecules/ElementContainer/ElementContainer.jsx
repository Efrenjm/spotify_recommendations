// import './ElementContainer.css'
import { CardTitle, CardText } from "../../atoms/Text/Text"
import { useState } from "react";

// import "./ElementContainer.css"

function TrackContainer({id, imgSrc, title, subtitle}) {
  const cardWidth = 300;
  const xGap = 10;
  const imgDim = 42;
  const textWidth = cardWidth - xGap*1.5 - imgDim;

  const trackKeyframe = `slideTrack${id}`

  return (
    <div style={{
      "display": "flex",
      "flex-direction": "row",
      "height": "60px",
      "width": cardWidth,
      "alignItems" : "center",
      "padding" : `0 ${xGap}px`,
      "gap" : xGap,
      // "overflow-x" : "hidden",
      "background-color":"var(--green)",
      "border-radius": "10px"
    }}>
      <img src={imgSrc}
          height={imgDim} 
          width={imgDim}
          style={{
            "border-radius" : "100%"
          }}/>
      <div style={{
        "display" : "flex",
        "flex-direction" : "column",
        "width" : textWidth,
        "overflow-x" : "hidden"

      }}>

          <CardTitle className="elem" //width={textWidth}
                      id = {id}
                      
          >
            {title}
          </CardTitle>
          <CardText //width={textWidth}
          >
            {subtitle}
          </CardText>

      </div>

    </div>
  )
}

export default TrackContainer