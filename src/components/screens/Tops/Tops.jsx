import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getArtists, getTracks } from '@api/GetData';
import { LimitSelector, TermSelector } from '@atoms/Buttons/Buttons';
import ElementsTable from '@template/ElementsTable/ElementsTable';
import '@screens/Tops/tops.css';

const Tops = ()=>{

  const changeTerm = async (term='short_term')=>{
    const midArtists = await getArtists(term);
    const midTracks = await getTracks(term);
    setArtists(midArtists);
    setTracks(midTracks);
  
  }

  const data = useLoaderData();
  
  const [artists,setArtists] = useState(data.artists);
  const [tracks,setTracks] = useState(data.tracks);
  
  const [topLimit,setTopLimit] = useState(5);
  
  return (
    <div id='topsBodyContainer'>
      <div id='SelectorsContainer'>
        <LimitSelector func={setTopLimit}/>
        <TermSelector func={changeTerm}/>
      </div>
      <div id='topsBody'>
        <div style={{width:'fit-content'}}>
          <ElementsTable type={'tracks'} elems={tracks.slice(0,topLimit)}/>
        </div>
        <div style={{width:'fit-content'}}>
          <ElementsTable type={'artists'} elems={artists.slice(0,topLimit)}/>
        </div>
      </div>
    </div>
  )
}

export default Tops
