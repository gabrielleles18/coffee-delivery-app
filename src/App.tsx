import {ThemeProvider} from "styled-components";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/global.ts";
import {Router} from "./Router.tsx";
import {defaultTheme} from "./styles/themes/default.ts";

import {CartContextProvider} from "./contexts/CartContext.tsx";

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CartContextProvider>
                    <Router/>
                </CartContextProvider>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

