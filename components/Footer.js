import React from 'react'
import styled, { ServerStyleSheet, injectGlobal } from "styled-components";
import media from '../mediaTemplate';
import SocialIcons from './SocialIcons';

<style jsx>{`
  footer {
    display: block;
    width: 100%;
    max-width: 1920px;
    overflow: hidden;
    background-color: rgba(102,102,102,0.5);
    background: rgba(153,153,153,0.5);
  }
`}</style>

const Copyright = styled.div`
    height: 2.8rem;
    line-height: 2.8em;
    background-color: #333;
    font-size: small;
    text-align: center;
    color: #fff;
`;

const now = new Date();

export default () => (
    <footer>
        <SocialIcons />
        <Copyright>
            &copy; Copyright {now.getFullYear()}. All Rights Reserved
        </Copyright>
    </footer>
)