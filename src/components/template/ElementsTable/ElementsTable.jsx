import TrackContainer from "../../molecules/ElementContainer/ElementContainer";
import { Title } from "../../atoms/Text/Text";

function ElementsTable(props) {
  const elem =  props.type //? 'tracks' : null
                // props.artists ?? 'Artists'
  if(elem){ 
    const top = `Top ${props.elems.length} ${elem}`
    // const subtitles = elem==='track' ?? props.elems.map((elem)=>{
    //   for(){

    //   }
    // })
    return (
      <>
        <div style={{
          backgroundColor: 'black',
          padding : '2rem 1.5rem',
          borderRadius : '20px',
        }}>
          <div style={{
            textAlign : 'center',
            height: 'auto',
            padding : '0 0 1rem 0',
          }}>
            <Title>{top}</Title>
          </div>
          <div  style={{
            display : 'flex',
            flexDirection : 'column',
            gap : 'var(--tab-padding)',
            height : 'var(--five-cards-height)',
            overflow: 'auto',
          }}>
            {
              // elem === 'Tracks' ?
                props.elems.map((elem, index)=>{
                  return (
                    <div key = {elem.id}>
                      <TrackContainer id = {elem.id}
                                      imgSrc = {elem.image}
                                      title = {elem.name}
                                      // subtitle = {subtitle}
                                      index = {index}/>
                    </div>
                  )
                })
                // : elem === 'Artists' ??
                // props.elems.map((elem,index)=>{
                //   return (
                //     <div key={elem.id}>
                //       <TrackContainer id = {elem.id}
                //                       imgSrc = {elem.image}
                //                       title = {elem.name}
                //                       //subtitle = {elem.genres[0].name}
                //                       index = {index}/>

                //                       {/* let obj = {
                //                         id : artist.id,
                //                         name : artist.name,
                //                         image : artist.images[0].url,
                //                         genres : artist.genres,
                //                         popularity : artist.popularit,
                //                       };   */}
                //     </div>
                //   )
                // })
            }
          </div>
        </div>
      </>
    )
  }
}

export default ElementsTable