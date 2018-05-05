import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Footer from '../components/Footer'
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import CallIcon from '@material-ui/icons/Call';
import ViewListIcon from '@material-ui/icons/ViewList';
import Link from 'next/link'

import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';

const primary = cyan[500]; // #00bcd4
const secondary = red[500]; // #F44336
const accent1 = cyan[800]; // 
// const accent2 = purple.A200; // #E040FB (alternative method)


const linkStyle = {
  marginRight: 15
}
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
    <Fragment>
      <div className={classes.root}>

        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Janet (Zhanna) Kulyk\'s Web Site - Web / Mobile Development Services - Toronto, Canada</title>
          <meta name="author" content="Janet (Zhanna) Kulyk" />
          <meta name="keywords" content="Janet (Zhanna) Kulyk, Жанна Кулик, web / mobile developer, HTML5, CSS3, JavaScript, jQuery, PHP, MySQL, performance, UI developer, frontend, web performance, Toronto, Ontario, Canada" />
          <meta name="description" content="Personal web site of Janet (Zhanna) Kulyk and JK IT Consulting Ltd., web / mobile development, design, front-end engineering" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>{ this.props.title }</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>

        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          style={{background: primary}}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Janet (Zhanna) Kulyk Personal Website
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
                <Link href="/">
                    <a style={{ fontSize: 20, textDecoration: 'none' }}>
                        <span style={{position: 'absolute', top: '6px', left: '24px', color: accent1}}><HomeIcon/></span><Typography style={{marginLeft: '72px', color: accent1}}>Home</Typography>
                        </a>
                </Link>
          </List>
          <Divider />
          <List>
            <Link href="/skills">
                <a style={{ fontSize: 20, textDecoration: 'none' }}>
                    <span style={{position: 'absolute', top: '6px', left: '24px', color: accent1}}><ViewListIcon /></span><Typography style={{marginLeft: '72px', color: accent1}}>Skills</Typography>
                    </a>
              </Link>
            </List>
          <Divider />
          <List>
          <Link href="/contact">
            <a style={{ fontSize: 20, textDecoration: 'none' }}>
              <span style={{position: 'absolute', top: '6px', left: '24px', color: accent1}}><CallIcon /></span><Typography style={{marginLeft: '72px', color: accent1}}>Contact</Typography>
              </a>
              </Link>
            </List>
          <Divider />
        </Drawer>
        <main className={classes.content}  style={{overflow: 'scroll'}}>
          <div className={classes.toolbar} />
          { this.props.children }
          {/* <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography> */}
        </main>
      </div>
      <Footer />
      </Fragment>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);