
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Header from '../Header';
import Footer from '../Footer';

import theme from '../../styles';
import useStyles from './style';

const App = () => {
  const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <div>
            Looking in to the logs
          </div>
          <Footer />
        </div>
      </ThemeProvider>
  )

};

export default App;
