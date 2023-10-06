import React from "react";

type Props = {
    aoClicar: () => void;

}
export const EventClick = ({aoClicar}: Props) => {

    return(
        <>
            <button onClick={aoClicar}>click em min</button>
        </>
    );
}