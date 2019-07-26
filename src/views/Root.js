import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/colors';
import HeroView from 'views/HeroView';
import AboutUsView from 'views/AboutUsView';
import HowWeWorkView from 'views/HowWeWorkView';
import OurTeamView from 'views/OurTeamView';
import SkillsView from 'views/SkillsView';
import OurWorkView from 'views/OurWorkView';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <HeroView />
          <AboutUsView />
          <HowWeWorkView />
          <OurTeamView />
          <SkillsView />
          <OurWorkView />
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
