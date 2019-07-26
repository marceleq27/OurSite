import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/colors';
import HeroView from 'views/HeroView';
import AboutUsView from 'views/AboutUsView';
import HowWeWorkView from 'views/HowWeWorkView';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <HeroView />
          <AboutUsView />
          <HowWeWorkView />
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
