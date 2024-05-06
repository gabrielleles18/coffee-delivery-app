import {TitleDetailsContainer} from "./styles.ts";
import {ReactNode} from "react";

interface TitleDetailsProps {
    title: string;
    description: string;
    icon: ReactNode
}

export function TitleDetails({title, description, icon}: TitleDetailsProps) {
    return (
        <TitleDetailsContainer>
            {icon}
            <hgroup>
                <h4>{title}</h4>
                <p>{description}</p>
            </hgroup>
        </TitleDetailsContainer>
    );
}
