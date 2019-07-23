import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/colors';
import HeroView from 'views/HeroView';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeroView />
      </ThemeProvider>
    </>
  );
};

export default App;
