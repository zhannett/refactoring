import React from 'react'
import Typography from 'material-ui/Typography';
import Main from '../layouts/Main'
import ThisSite from '../components/ThisSite'
import { ServerStyleSheet, injectGlobal } from "styled-components";
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

<style jsx>{`
  dl {
	display: flex;
	flex-direction: row;
  }
`}</style>

export default () => (
    <Main style={{height: '100%', overflow: 'scroll', marginBottom: '150px'}}>
       			<div style={{height: '100%', overflow: 'scroll', marginBottom: '150px'}}>
					<Typography variant="display3" style={{color: secondary}}>Computer Skills</Typography>
					<dl>
						<dt><Typography variant="title">Operating Systems:</Typography></dt>
						<dd>
							<Typography variant="subheading">
								Mac OS X<br/>
								Windows XP+<br/>
								Linux
							</Typography>
						</dd>
					</dl>
					<dl>
						<dt><Typography variant="title">Programming Languages:</Typography></dt>
						<dd>
							<Typography variant="subheading">
								HTML5, HTML/XHTML/semantic HTML;<br/>
								CSS3 (including flexbox, grid);<br/>
								CSS tools:<br/>
								<div style={{paddingLeft: '16px'}}>
									* Precompilers: SASS, LESS<br/>
									* Frameworks: Bootstrap, Ionic, jQuery Mobile, jQuery UI<br/>
									* Responsive Design with CSS3 (including flexbox)<br/>
								</div>
								JavaScript:<br/>
								<div style={{paddingLeft: '16px'}}>
									* React.js, Redux<br/>
									* ES6<br/>
									* DOM-scripting, jQuery<br/>
									* OO-JavaScript<br/>
									* MV*  JavaScript frameworks: AngularJS, knockoutJS, Dojo <br/>
									* node.js, Express, npm, yarn, Nginx
								</div>
								JSON, XML/XSL(XPath, XSLT);<br/>
								MEAN stack (MongoDB-Express-AngularJS-NodeJS)<br/>
								PHP 3/4/5 <br/>
								SQL
							</Typography>
                         </dd>
					</dl>
					<dl>
					  <dt><Typography variant="title">Front-End Build Tools:</Typography></dt>
					  <dd>
					  	<Typography variant="subheading">
						   npm scripts<br/>
						   Yeoman.io<br/>
						   Bower<br/>
						   Grunt<br/>
						   Gulp<br/>
						   ant
						</Typography>
						</dd>
					</dl>
					<dl>
                      <dt><Typography variant="title">Unit testing:</Typography></dt>
                      <dd>Jest / Enzyme, Jasmine, Karma / PhantomJS</dd>
                    </dl>
					<dl>
						<dt><Typography variant="title">Technologies:</Typography></dt>
						<dd>
						<Typography variant="subheading">
						XML, JSP, ASP, OOD, RDBMS, AJAX
						</Typography>
						</dd>
					</dl>
					<dl>
                    	<dt><Typography variant="title">Code Review Tools:</Typography></dt>
                    	<dd>
						<Typography variant="subheading">
						Bitbucket , Phabricator
						</Typography>
						</dd>
                    </dl>
                    <dl>
                        <dt><Typography variant="title">Technologies:</Typography></dt>
                        <dd>
						<Typography variant="subheading">
						SPA (Single Page applications)<br/>
						MVC architecture<br/>
						RESTful web services<br/>
						mobile web development<br/>
						XML<br/>
						ASP<br/>
						OOD<br/>
						RDBMS<br/>
						AJAX<br/>
						I18N (internationalization)<br/>
						Apache Cordova
						</Typography>
						</dd>
                    </dl>
					<dl>
						<dt><Typography variant="title">Version Control:</Typography></dt>
						<dd>
						<Typography variant="subheading">
						GIT<br/>
						Perforce<br/>
						CVS<br/>
						Visual SourceSafe (VSS)<br/>
						StarTeams
						</Typography>
						</dd>
					</dl>
					<dl>
						<dt><Typography variant="title">Project Management:</Typography></dt>
						<dd>
						<Typography variant="subheading">
						JIRA<br/>
						Confluence<br/>
						VersionOne<br/>
						Agile
						</Typography>
						</dd>
					</dl>
					<dl>
						<dt><Typography variant="title">Web:</Typography></dt>
						<dd>
						<Typography variant="subheading">
						Web / mobile information architecture<br/>
						wireframe design<br/>
						layouts including flex- and grid-based layouts<br/>
						templates<br/>
						web usability<br/>
						UX, accessibility / WCAG 2.0 / AODA / ADA / Section 508<br/>
						W3C-compliancy<br/>
						cross-browser and cross-platform compatibility<br/>
						SEO<br/>
						web / mobile applications performance optimization<br/>
						Google Analytics<br/>
						StatsCounter<br/>
						progressive enhancement methodology<br/>
						user-centric development / design<br/>
						responsive web design<br/>
						JSLint<br/>
						Amazon 
						</Typography>
						</dd>
					</dl>
					<dl style={{marginBottom: '40px'}}>
						<dt><Typography variant="title">Software:</Typography></dt>
						<dd>
						<Typography variant="subheading">
							MS Office  (MS Word, MS Excel, MS Access, MS Power Point)<br/>
							Adobe Suite<br/>
							phpMyAdmin<br/>
							IntelliJ IDEA<br/>
							WebStorm<br/>
							Stripe
						</Typography>
						</dd>
					</dl>
					<ThisSite/>
					<div style={{marginBottom: '150px'}} />
			</div>
    </Main>
)