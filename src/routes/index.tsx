import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Home from "../pages/Home";
import RequestJob from "../pages/RequestJob";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "../utils/usePersistentStorage";
import light from "../styles/themes/light";
// import dark from "../styles/themes/dark";
import Default from "../layouts/Default";

function Routes() {
  const [theme] = usePersistedState<DefaultTheme>("theme", light);

  // const toggleTheme = () => {
  //   setTheme(theme.title === "light" ? dark : light);
  // };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Default>
              <Home />
            </Default>
          </Route>
          <Route path="/request-job">
            <Default>
              <RequestJob />
            </Default>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
