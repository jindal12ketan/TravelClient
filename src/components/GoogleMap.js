import React, { useEffect } from "react";

function GoogleMap({location}){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        ifameData.src=`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&hl=es;&output=embed`;

    })
    return(
        <div>
            <iframe id="iframeId" height="400px" width="600px"></iframe>
        </div>
    );
}
export default GoogleMap;