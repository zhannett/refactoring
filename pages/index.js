import React, {Fragment} from 'react'
import MiniDrawer from '../components/MiniDrawer'
// import Layout from '../layouts/PageLayout'
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import { ServerStyleSheet, injectGlobal } from "styled-components";

// export default () => <div>Welcome to next.js!</div>
const IndexPage = () => (
<MiniDrawer>
         <Fragment>
        <h1>Hello 🌎!</h1>
        <div class="main_section">
            <div class="main_content welcome">
                <h1 class="visuallyhidden">Janet (Zhanna) Kulyk's Web Site - Web Development Services</h1>
                <h1 class="h1_home">Welcome!</h1>
                <article>
                    <figure>
                        <img src="http://janetkulyk.s3.amazonaws.com/img/me3.png" alt="Janet's Photo" />
                    </figure>
                    <div class="promo">
                        <p class="pres grey1">Hi!</p>
                        <p class="pres grey2">I'm Janet Kulyk.</p>
                        <p class="pres grey3">I'm a Front-End Developer.</p>
                        <p>I build web and mobile web applications for large corporations and small businesses. Sometimes I work as a one-person web agency.</p>
                        <p>My current focus is Full Stack JavaScript application development for all spectrum of devices, responsive web design, performance optimization, web standards, user experience, accessibility, cross-browser and cross-platform development.</p>
                        <p>This web site highlights some of my professional skills, contains reference materials and links, has some fun pages, and serves as a sandbox for playing with new code.</p>
                    </div>
                </article>
                <h1>Services</h1>
                <ul class="services">
                    <li><span class="black bold">Web Services:</span> domain registration, web hosting, concept development, content management (maintenance)</li>
                    <li><span class="black bold">Web Design:</span> concept design and building web applications (desktop, tablet, mobile, responsive design)</li>
                    <li><span class="black bold">Web Development:</span> programming and integration of web / mobile applications</li>
                    <li><span class="black bold">Web Template Service:</span> converting your designs to HTML5, CSS3, and JavaScript templates, to React components that adhere to W3C standards and the highest level of accessibility</li>
                    <li><span class="black bold">Website Assessment Report:</span> reviewing every aspect of your online presence and recommend cost-effective improvements.</li>
                    <li><span class="black bold">Website Performance Optimization:</span> analyzing the speed of your website, make recommendations, and implement solutions to make your website fast.</li>
                    <li><span class="black bold">Internationalization:</span> developing multi-lingual websites or add additional languagues to your existing website.</li>
                    <li><span class="black bold">Google Analytics</span> for your website.</li>
                    <li><span class="black bold">Email Newsletters:</span> design, build, sending.</li>
                </ul>
                <p>JK IT Consulting, Ltd. is registered in Ontario, Canada, but the web allows me to collaborate no matter where you are in the world.</p>
                <p>I speak English, Russian, and Ukrainian.</p>
        </div>
        <div class="aside_right">
            <aside>
                <div class="quot">
                    <blockquote>
                        Be yourself, everyone else is already taken.
                        <cite>Oscar Wilde</cite>
                    </blockquote>
                </div>
                <div class="quot">
                    <blockquote>
                        The greatest glory is not in never failing, but in rising up every time we fall.
                        <cite>Confucius,<br/>551 BC – 479 BC</cite>
                    </blockquote>
                </div>
                <div class="title_css3_demo">
                    <a href="http://www.janetkulyk.com/kinetic-typography-video/" target="_blank"><img src="<?php echo $media ?>ad_css3_125x125.png" alt="" /></a>
                </div>
            </aside>
        </div>
        </div>
    </Fragment>
 </MiniDrawer>
)

export default IndexPage