import {ThemeProvider} from "styled-components";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/global.ts";
import {Router} from "./Router.tsx";
import {defaultTheme} from "./styles/themes/default.ts";

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>

            <GlobalStyle/>
        </ThemeProvider>
    )
}

