import {Header} from "../../components/Header";
import {Outlet} from "react-router-dom";

import {LayoutContainer} from "./styles.ts";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    );
}
