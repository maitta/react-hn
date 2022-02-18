import React from "react";
import { useParams } from "react-router-dom";

function ItemComments(){
    const itemId = useParams().itemId;

    return(
        <>
            <div>hey there item: { itemId && itemId || !itemId && 'invalid item' }</div>
        </>
    )
}

export default ItemComments;