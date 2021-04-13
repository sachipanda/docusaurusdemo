// Note: importing from "@theme/Footer" would fail due to the file importing itself
import OriginalFooter from '@theme-original/Footer';
import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function Footer(props) {
const location = useLocation();
console.log(location.pathname);


const refreshPage = ()=>{
     window.location.reload();
     console.log("Just ran refreshPage method")
  }

firstMethod = ( event ) => {
    console.log("running firstMethod before reload")
    window.location.reload();
    console.log("page may have reloaded now")
}

console.log({ refreshPage })
     
  return (
    <>
      <div>Share this page in MS Teams <a class="teams-share-button" data-href={"https://sachipanda.github.io" + location.pathname}>Share this link</a></div>
      <div>
      <h1>{Math.random()}</h1>
      <button onClick={refreshPage}>Refresh</button>
      </div>
      <OriginalFooter {...props} />
    </>
  );
}
