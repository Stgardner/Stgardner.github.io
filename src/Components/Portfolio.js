import React from 'react'
import ReactPlayer from 'react-player'
import Dremora from './Dremora.png'
import ChemistryRead from './ChemistryRead.png'
import styled from "@emotion/styled/macro";
      
const iframe = '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3179020100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://princesatyrn.bandcamp.com/album/escape-from-coffeeland">Escape From Coffeeland by Prince Satyrn</a></iframe>'
      function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }
      const DisplayOver = styled.div({
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
      });
      
      const BigTitle = styled.h2({
        color: "#fff",
        textTransform: "uppercase"
        
      });

      const Hover = styled.div({
        opacity: 0,
        transition: "opacity 350ms ease",
      });
      const SubTitle = styled.h4({
        fontFamily: "Helvetica",
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
        color: "#fff"
      });
      
      const Paragraph = styled.p({
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
      });
      
      const CTA = styled.a({
        position: "absolute",
        bottom: "20px",
        left: "20px",
      })

      const Background = styled.div({
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#FFF",
        position: "relative",
        width: "350px",
        height: "350px",
        cursor: "pointer",
        backgroundImage: `url(${Dremora})`,
        [`:hover ${DisplayOver}`]: {
          backgroundColor: "rgba(0,0,0,.5)",
        },
        [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
          transform: "translate3d(0,0,0)",
        },
        [`:hover ${Hover}`]: {
          opacity: 1,
        },
      });

      const ChemistryCTA = styled.a({
        position: "absolute",
        bottom: "20px",
        left: "20px",
      })

      const DisplayOverChemistry = styled.div({
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
      });

      const ChemistryHover = styled.div({
        opacity: 0,
        transition: "opacity 350ms ease",
      });

      const SubTitleChemistry = styled.h4({
        fontFamily: "Helvetica",
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
        color: "#fff"
      });

      const ChemistryParagraph = styled.p({
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
      });

      const BackgroundChemistry = styled.div({
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#FFF",
        position: "relative",
        width: "275px",
        height: "405px",
        cursor: "pointer",
        backgroundImage: `url(${ChemistryRead})`,
        [`:hover ${DisplayOverChemistry}`]: {
          backgroundColor: "rgba(0,0,0,.5)",
        },
        [`:hover ${SubTitleChemistry}, :hover ${Paragraph}`]: {
          transform: "translate3d(0,0,0)",
        },
        [`:hover ${ChemistryHover}`]: {
          opacity: 1,
        },
      });


export default function Portfolio() {
  return (
    <div>
      <div style={{fontSize: "33px", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: '18px'}}>
        <p>Works</p>
      </div>
      <a style={{display: "flex", flexWrap: "wrap", justifyContent: "center" , alignItems: 'center', gap: "30px", padding: "0 4px"}}>
      
      <BackgroundChemistry>
        <DisplayOverChemistry>
        <ChemistryHover>
          <SubTitleChemistry>Best Original Song Indie Short Fest 2019</SubTitleChemistry>
          <ChemistryParagraph>I produced the winning song "Top Dawg" ft. Kevin Leung</ChemistryParagraph>
          <ChemistryCTA clickable="true" onClick={event =>  window.location.href='https://www.imdb.com/name/nm10218327/?ref_=ttawd_awd_4'}>View More +</ChemistryCTA>
        </ChemistryHover>
        </DisplayOverChemistry>
      </BackgroundChemistry>
      <Background>
        <DisplayOver>
    <BigTitle>Dremora</BigTitle>
    <Hover>
      <SubTitle>Render in Redshift / C4d</SubTitle>
      <Paragraph>
        Texturing done in Substance Painter and Rendered with Redshift
      </Paragraph>
      <CTA clickable="true" onClick={event =>  window.location.href='https://www.artstation.com/artwork/9m5vqW'}>View More +</CTA>
    </Hover>
  </DisplayOver>
</Background>
      <ReactPlayer url={"https://www.youtube.com/watch?v=ZNpRV0AOxmU"} />
      <ReactPlayer url={"https://www.youtube.com/watch?v=o2m77ddihkg"} />
      <ReactPlayer url={"https://www.youtube.com/watch?v=pZf6oHCEQ74"} />
      <Iframe iframe={iframe} />
      </a>
    </div>
  )
}