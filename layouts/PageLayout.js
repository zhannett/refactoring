import React, {Fragment} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Head from 'next/head'
import Footer from '../components/Footer'
import MiniDrawer from '../components/MiniDrawer'
import styled, { ServerStyleSheet, injectGlobal } from "styled-components";

injectGlobal`
  html {
    font-size: 1rem;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Janet (Zhanna) Kulyk\'s Web Site - Web / Mobile Development Services - Toronto, Canada</title>
          <meta name="author" content="Janet (Zhanna) Kulyk" />
          <meta name="keywords" content="Janet (Zhanna) Kulyk, Жанна Кулик, web / mobile developer, HTML5, CSS3, JavaScript, jQuery, PHP, MySQL, performance, UI developer, frontend, web performance, Toronto, Ontario, Canada" />
          <meta name="description" content="Personal web site of Janet (Zhanna) Kulyk and JK IT Consulting Ltd., web / mobile development, design, front-end engineering" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="alternate" media="handheld" type="application/xhtml+xml" href="http://m.janetkulyk.com/" />
          <title>{ this.props.title }</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />    
        </Head>
        <MiniDrawer />
        <Footer />
      </Fragment>
    )
  }
}