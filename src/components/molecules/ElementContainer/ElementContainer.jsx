// import './ElementContainer.css'
import { CardText, CardTitle } from '../../atoms/Text/Text';

// import "./ElementContainer.css"

function ElementContainer({id, imgSrc, title, subtitle, index}) {
  const cardWidth = 320;
  const xGap = 10;
  const imgDim = 42;
  const textWidth = cardWidth - xGap*1.5 - imgDim;

  // const trackKeyframe = `slideTrack${id}`

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: 'var(--card-height)',
      widt: 'var(--card-width)',
      alignItems : 'center',
      padding : `0 ${xGap}px`,
      gap : xGap,
      backgroundColor:'var(--green)',
      borderRadius: '15px'
    }}>
      <h2 style={{
        width : '2rem',
        textAlign : 'center',
      }}>{index+1}</h2>
      <img src={imgSrc}
          height={imgDim} 
          width={imgDim}/>
      <div style={{
        display : 'flex',
        flexDirection : 'column',
        width : textWidth,
        overflowX : 'hidden'
      }}>

        <CardTitle className='elem'
                    id = {id}>
          {title}
        </CardTitle>
        <CardText>
          {subtitle}
        </CardText>
      </div>
    </div>
  )
}

export default ElementContainer