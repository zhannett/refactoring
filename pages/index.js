import React, {Fragment} from 'react'
import styled, { ServerStyleSheet, injectGlobal } from "styled-components";
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Main from '../layouts/Main'
import Asterisk from '../svg/Asterisk'

import teal from 'material-ui/colors/teal';
import red from 'material-ui/colors/red';

const primary = teal[500]; // #009688
const secondary = red[300]; // #F44336
const secondary700 = red[700];
const secondary900 = red[900];

const primaryDark = teal[700];
const primaryLight = teal[300];
const secondaryDark = '#ba000d';
const secondaryLight = '#ff7961';

import getConfig from 'next/config'
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

//console.log(serverRuntimeConfig.mySecret) // Will only be available on the server side
// console.log(publicRuntimeConfig.staticFolder) // Will be available on both server and client
/*
export default () => <div>
  <img src={`${publicRuntimeConfig.staticFolder}/logo.png`} alt="logo" />
</div>
*/

const isProd = process.env.NODE_ENV === 'production'
/*
module.exports = {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
}
*/

// console.log(serverRuntimeConfig.mySecret) // Will only be available on the server side
// console.log(publicRuntimeConfig.staticFolder) // Will be available on both server and client
/*
export default () => <div>
  <img src={`${publicRuntimeConfig.staticFolder}/logo.png`} />
</div>
*/

const Promo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-even;
    img {
        max-width: 264px;
        padding: 4px;
        border: 4px solid #ccc;
        border-radius: 8px;
        margin-right: 32px;
    }
`;

const CurrentFocus = styled.div`
    width: 100%;
    max-width: 800px;
`;

const Services = styled.ul`
   list-style-type: none;
   left top;
   padding-left: 0;
   li {
     display: flex;
     flex-direction: row;
     margin: 12px 0;
   }
`;

// export default () => <div>Welcome to next.js!</div>
const IndexPage = () => (
<Main>
         <div style={{height: '100%', overflow: 'auto'}}>
            <div className="main_content welcome">
                <h1 style={{display: 'none'}}>Janet (Zhanna) Kulyk's Web Site - Web Development Services</h1>
                {/*<Typography variant="display3">Welcome!</Typography>*/}
                <Promo>
                   <div>
                        <img src="http://janetkulyk.s3.amazonaws.com/img/me3.png" style={{borderColor: secondary}} alt="Janet's Photo" />
                    </div>
                    <div className="promo">
                        <Typography variant="display2" style={{color: secondary, lineHeight: 1.5}}>Hi!</Typography>
                        <Typography variant="display1" style={{color: primaryDark, lineHeight: 1.5}}>I'm Janet Kulyk.</Typography>
                        <Typography variant="display1" style={{color: primary, lineHeight: 1.5}}>I'm a Front-End Developer.</Typography>
                        <Typography variant="display1" style={{color: primaryLight, lineHeight: 1.5}}>I build web and hybrid mobile applications.</Typography>
                        <Typography variant="display1" style={{color: secondaryLight, lineHeight: 1.5}}>I love JavaScript and Responsive Design.</Typography>
                    </div>
                </Promo>
                <div style={{maxWidth: '800px', padding: '16px', border: '2px solid #ccc', borderColor: primary, borderRadius: '8px', textAlign: 'center'}}>
                <p><Typography variant="title">This site is built using React.js, Next.js, Material-UI, Node.js, Nginx, and Express.</Typography></p>

                    </div>
                <CurrentFocus>
        
                    <p><Typography variant="body2">This web site highlights some of my professional skills, contains reference materials and links, has some fun pages, and serves as a sandbox for playing with new code.</Typography></p>
                </CurrentFocus>    
                <Typography variant="display3" style={{color: secondary}}>Services</Typography>
                <Services>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Web Services: </Typography><Typography style={{display: 'inline'}}>domain registration, web hosting, concept development, content management (maintenance)</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Web: </Typography><Typography style={{display: 'inline'}}> design and building web applications (desktop, tablet, mobile, responsive design)</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Web Development: </Typography><Typography style={{display: 'inline'}}>programming and integration of web / mobile applications</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Web Template Service: </ Typography><Typography style={{display: 'inline'}}>converting your designs to HTML5, CSS3, and JavaScript templates, to React components that adhere to W3C standards and the highest level of accessibility</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Website Assessment Report: </Typography><Typography style={{display: 'inline'}}>reviewing every aspect of your online presence and recommend cost-effective improvements.</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Website Performance Optimization: </Typography><Typography style={{display: 'inline'}}>analyzing the speed of your website, make recommendations, and implement solutions to make your website fast.</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Internationalization: </Typography><Typography style={{display: 'inline'}}>developing multi-lingual websites or add additional languagues to your existing website.</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Google Analytics: </Typography><Typography style={{display: 'inline'}}>for your website.</Typography></span></li>
                    <li><span><Asterisk/></span><span style={{marginLeft: '8px'}}><Typography variant="subheading" style={{display: 'inline', color: secondary900}}>Email Newsletters: </Typography><Typography style={{display: 'inline'}}>design, build, sending.</Typography></span></li>
                </Services>
                <div style={{paddingLeft: '16px', borderLeft: '2px solid #ccc', borderColor: primary,marginBottom: '150px'}}>
                    <p><Typography variant="body2" style={{color: primaryDark}}>JK IT Consulting, Ltd. is registered in Ontario, Canada, but the web allows me to collaborate no matter where you are in the world.</Typography></p>
                    <p><Typography variant="body2" style={{color: primaryDark}}>I speak English, Russian, and Ukrainian.</Typography></p>
                </div>
                {/*
            <div className="aside_right">
                <aside>
                    <div className="quot">
                        <blockquote>
                            Be yourself, everyone else is already taken.
                            <cite>Oscar Wilde</cite>
                        </blockquote>
                    </div>
                    <div className="quot">
                        <blockquote>
                            The greatest glory is not in never failing, but in rising up every time we fall.
                            <cite>Confucius,<br/>551 BC – 479 BC</cite>
                        </blockquote>
                    </div>
                    <div className="title_css3_demo">
                        <a href="http://www.janetkulyk.com/kinetic-typography-video/" target="_blank"><img src="<?php echo $media ?>ad_css3_125x125.png" alt="" /></a>
                    </div>
                </aside>
            </div>
            */}
        </div>
    </div>
 </Main>
)

export default IndexPage