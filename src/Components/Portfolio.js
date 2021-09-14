import React from 'react'
import ReactPlayer from 'react-player'
import Dremora from './Dremora.png'
      
const iframe = '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3179020100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://princesatyrn.bandcamp.com/album/escape-from-coffeeland">Escape From Coffeeland by Prince Satyrn</a></iframe>'
      function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }

export default function Portfolio() {
  return (
    <div>
      <div style={{fontSize: "33px", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: '18px'}}>
        <p>Works</p>
      </div>
      <a style={{display: "flex", flexWrap: "wrap", justifyContent: "center" , alignItems: 'center', gap: "30px", padding: "0 4px"}}>
      
      <div>
        <img style={{height: "110%", width: "110%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMva8xUC9uXCMsmTYb8nwR-GbK7TpBOuV-6ivU_SLYQ3Pc94qbVHH9wChvWV4n0d35PVc&usqp=CAU" clickable="true" onClick={event =>  window.location.href='https://www.imdb.com/name/nm10218327/?ref_=ttawd_awd_4'}></img>
      </div>
      <img src={Dremora} style={{height: "555px", width: "555px"}}/>
      <ReactPlayer url={"https://www.youtube.com/watch?v=ZNpRV0AOxmU"} />
      <ReactPlayer url={"https://www.youtube.com/watch?v=o2m77ddihkg"} />
      <ReactPlayer url={"https://www.youtube.com/watch?v=pZf6oHCEQ74"} />
      <Iframe iframe={iframe} />
      </a>
    </div>
  )
}