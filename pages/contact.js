import React, {Component} from 'react'
import Typography from 'material-ui/Typography';
import set from 'lodash/set';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import styled, { ServerStyleSheet, injectGlobal } from "styled-components";
import Main from '../layouts/Main'
import media from'../mediaTemplate'
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

const ContactInfoThumbs = styled.div`
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: top;
    margin: -4px 8px 20px 0;
    background: url(http://janetkulyk.s3.amazonaws.com/img/sprite-icons.png) no-repeat;
`;

const WWW = styled(ContactInfoThumbs)`
    background-position: -378px 0;
`;

const Home = styled(ContactInfoThumbs)`
    background-position: -336px 0;
`;

const Email = styled(ContactInfoThumbs)`
    background-position: -252px 0;
`;

const Phone = styled(ContactInfoThumbs)`
    background-position: -210px 0;
`;

const Skype = styled(ContactInfoThumbs)`
    background-position: -294px 0;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  ${media.small`
    flex-wrap: wrap;
  `}
  ${media.phone`
    flex-direction: row;
  `};
`;


// export default () => (
class Contact extends Component {
    render() {
        const latitude = 43.6677490;
        const longitude = -79.4061090;

        const MapComponent = compose(
            withProps({
              googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
              loadingElement: <div style={{ height: `100%` }} />,
              containerElement: <div style={{ width: '360px', height: `240px` }} />,
              mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap
          )((props) =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: latitude, lng: longitude }}
            >
              {props.isMarkerShown && <Marker position={{ lat: latitude, lng: longitude }} />}
            </GoogleMap>
          );
        return(
    <Main>
        <Typography variant="display3" style={{color: secondary}}>Contact Info</Typography>
       <ContactWrapper>
            <ul style={{listStyle: 'none', paddingLeft: 0, paddingRight: '24px', minWidth: '35%'}}>
                <li><WWW/><Typography noWrap='true' style={{display: 'inline'}}><a href="http://www.janetkulyk.com/" class="url">www.janetkulyk.com</a></Typography></li>
                <li><Home/><Typography noWrap='true' style={{display: 'inline'}}>Toronto, <abbr title="Ontario">ON</abbr>, Canada</Typography></li>
                <li><Email/><Typography noWrap='true' style={{display: 'inline'}}>E-mail: <a href="mailto:janetkulyk@yahoo.com">janetkulyk@yahoo.com</a></Typography></li>
                <li><Phone/><Typography noWrap='true' style={{display: 'inline'}}>Phone: <a href="tel:+14169294372">(416) 841-4372</a></Typography></li>
                <li><Skype/><Typography noWrap='true' style={{display: 'inline'}}>Skype: janetkulyk</Typography></li>
            </ul>
            <MapComponent isMarkerShown />
            <div className="aside_right">

        
                <aside>
                    <div className="quot">
                        <blockquote>
                            Non progrede est regrede.
                        </blockquote>
                    </div>
                    <div className="quot">
                        <blockquote>
                            Not going forward is coming back.
                        </blockquote>
                    </div>
                </aside>
		</div>
		</ContactWrapper>
    </Main>
)
    }}

    export default Contact;