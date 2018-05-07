import styled, { ServerStyleSheet, injectGlobal } from "styled-components";
import Typography from 'material-ui/Typography'
import media from '../mediaTemplate';

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


const ThisSite = styled.div`
    width: 90%;
    max-width: 840px;
    padding: 16px;
    border: 1px solid #ccc;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align: center;
    margin-top: 32px;
    margin-bottom: 32px;
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        -webkit-animation: Gradient 10s ease infinite;
        -moz-animation: Gradient 10s ease infinite;
        animation: Gradient 10s ease infinite;
    @-webkit-keyframes Gradient {
        0% {background-position: 0% 50%}
        50% {background-position: 100% 50%}
        100% {background-position: 0% 50%}
    }
    @-moz-keyframes Gradient {
        0% {background-position: 0% 50%}
        50% {background-position: 100% 50%}
        100% {background-position: 0% 50%}
    }
    @keyframes Gradient {
        0% {background-position: 0% 50%}
        50% {background-position: 100% 50%}
        100% {background-position: 0% 50%}
    }
    ${media.tablet`
      width: 100% - 4px);
      padding: 0;
    `};
`;

export default () => (
    <ThisSite>
        <p><Typography variant="title" style={{color: '#fff', lineHeight: 2}}>This site is built using React.js, Next.js, Material-UI, CSS3, Node.js, Nginx, and Express.</Typography></p>
    </ThisSite>
)