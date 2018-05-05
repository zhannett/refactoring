import React from 'react'
import Typography from 'material-ui/Typography';
import Main from '../layouts/Main'
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

export default () => (
    <Main>
       			<div className="main_section">
				<div>
					<h1 className="hidden_seo">Professional Skills</h1>
					<Typography variant="display3" style={{color: secondary}}>Computer Skills</Typography>
					<dl>
						<dt>Operating Systems:</dt>
						<dd>Mac OS X, Windows XP+</dd>
					</dl>
					<dl>
						<dt>Programming Languages:</dt>
						<dd>
						    HTML5, HTML/XHTML/semantic HTML;<br/>
						    CSS3 (including flexbox, grid);<br/>
						    CSS tools:<br/>
						    * Precompilers: SASS, LESS<br/>
                            * Frameworks: Bootstrap, Ionic, jQuery Mobile, jQuery UI<br/>
                            * Responsive Design with CSS3 (including flexbox)<br/>
                            JavaScript:<br/>
                            * React.js, Redux<br/>
                            * ES6<br/>
                            * DOM-scripting, jQuery<br/>
                            * OO-JavaScript<br/>
                            * MV*  JavaScript frameworks: AngularJS, knockoutJS, Dojo <br/>
                            * node.js, Express, npm, yarn, Nginx<br/>
                            JSON, XML/XSL(XPath, XSLT);<br/>
                            MEAN stack (MongoDB-Express-AngularJS-NodeJS)<br/>
                            PHP 3/4/5 <br/>
                            SQL
                         </dd>
					</dl>
					<dl>
					  <dt>Front-End Build Tools:</dt>
					  <dd>npm scripts , Yeoman.io, Bower, Grunt, Gulp, ant</dd>
					</dl>
					<dl>
                      <dt>Unit testing:</dt>
                      <dd>Jest / Enzyme, Jasmine, Karma / PhantomJS</dd>
                    </dl>
					<dl>
						<dt>Technologies:</dt>
						<dd>XML, JSP, ASP, OOD, RDBMS, AJAX</dd>
					</dl>
					<dl>
                    	<dt>Code Review Tools:</dt>
                    	<dd>Bitbucket , Phabricator</dd>
                    </dl>
                    <dl>
                        <dt>Technologies:</dt>
                        <dd>SPA (Single Page applications), MVC architecture, RESTful web services, mobile web development, XML, ASP, OOD, RDBMS,  AJAX, I18N (internationalization), Apache Cordova</dd>
                    </dl>
					<dl>
						<dt>Version Control:</dt>
						<dd>GIT, Perforce, CVS, Visual SourceSafe (VSS), StarTeams </dd>
					</dl>
					<dl>
						<dt>Project Management:</dt>
						<dd>JIRA, Confluence, VersionOne, Agile</dd>
					</dl>
					<dl>
						<dt>Web:</dt>
						<dd>Web / mobile information architecture, wireframe design, layouts including flex- and grid-based layouts, templates, web usability, UX, accessibility / WCAG 2.0 / AODA / ADA / Section 508, W3C-compliancy, cross-browser and cross-platform compatibility; SEO; web / mobile applications performance optimization, Google Analytics, StatsCounter, progressive enhancement methodology, user-centric development / design, responsive web design, JSLint, Amazon s3</dd>
					</dl>
					<dl>
						<dt>Software:</dt>
						<dd>MS Office  (MS Word, MS Excel, MS Access, MS Power Point), Lotus Notes, Adobe Suite, Eclipse, phpMyAdmin,  IntelliJ IDEA, WebStorm, Stripe</dd>
					</dl>
					<h2>Certificates</h2>
                    <div className="clearfix">
                        <ul data-behavior="smartLinks">
                            <li><span><strong>2005</strong> - <strong><acronym title="Cascading Style Sheets">CSS2</acronym></strong> Certificate (</span><a href="http://www.brainbench.com">www.brainbench.com</a><span>)</span></li>
                            <li><span><strong>2005</strong> - <strong><acronym title="Extensible Markup Language">XML</acronym></strong>  Certificate (</span><a href="http://www.brainbench.com">www.brainbench.com</a><span>)</span></li>
                            <li><span><strong>2005</strong> - <strong>PHP4</strong> Certificate (</span><a href="http://www.brainbench.com">www.brainbench.com</a><span>)</span></li>
                            <li><span><strong>2005</strong> - <strong>JavaScript</strong> Certificate (</span><a href="http://www.brainbench.com">www.brainbench.com</a><span>)</span></li>
                            <li><span><strong>2002</strong> - <strong><acronym title="Structured Query Language">SQL</acronym> and PL/SQL</strong>  Certificate (</span><a href="http://www.oracle.com">ORACLE</a><span>)</span></li>
                            <li><span><strong>2000</strong> - <strong>MS SQL Server 6.5</strong> Certificate (</span><a href="http://www.brainbench.com">www.brainbench.com</a><span>)</span></li>
                        </ul>
                    </div>
                    <ul className="gallery clearfix">
                        <li><a href="<?php echo $media ?>certificates/sql.jpg" class="certimg" rel="prettyPhoto[gallery]" title="SQL Server Certificate"><img src="<?php echo $media ?>certificates/sql-thumb.jpg" width="120" height="91" alt="SQL Server Certificate" /></a></li>
                        <li><a href="<?php echo $media ?>certificates/php.jpg" class="certimg" rel="prettyPhoto[gallery]" title="PHP Certificate"><img src="<?php echo $media ?>certificates/php-thumb.jpg"  width="120" height="91"alt="PHP Certificate" /></a></li>
                        <li><a href="<?php echo $media ?>certificates/js.jpg" class="certimg" rel="prettyPhoto[gallery]" title="JavaScript Certificate"><img src="<?php echo $media ?>certificates/js-thumb.jpg" width="120" height="91" alt="JavaScript Certificate" /></a></li>
                        <li><a href="<?php echo $media ?>certificates/xml.jpg" class="certimg" rel="prettyPhoto[gallery]" title="XML Certificate"><img src="<?php echo $media ?>certificates/xml-thumb.jpg" width="120" height="91" alt="XML Certificate" /></a></li>
                        <li><a href="<?php echo $media ?>certificates/css.jpg" class="certimg" rel="prettyPhoto[gallery]" title="CSS2 Certificate"><img src="<?php echo $media ?>certificates/css-thumb.jpg" width="120" height="91"alt="CSS2 Certificate" /></a></li>
                        <li><a href="<?php echo $media ?>certificates/oracle.jpg" class="certimg" rel="prettyPhoto[gallery]" title="Oracle certificate"><img src="<?php echo $media ?>certificates/oracle-thumb.jpg" width="91" height="120"alt="Oracle certificate" /></a></li>
                    </ul>
				</div>
{/*<iframe src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/skills.php" scrolling="no" frameborder="0" style="border:none; width:450px; height:80px"></iframe> */}
			</div>
			<div className="aside_right">
				<aside>
					<div className="quot">
						<blockquote>
							We are all building the future through the work and the projects that we do today.
						</blockquote>
					</div>
					<div className="quot">
							<blockquote>
								We shape our buildings: thereafter they shape us.
								<cite>Winston Churchill</cite>
							</blockquote>
					</div>
					<div className="quot">
						<blockquote>
							Judge your success by what you had to give up in order to get it.
						</blockquote>
					</div>
				</aside>
			</div>
    </Main>
)