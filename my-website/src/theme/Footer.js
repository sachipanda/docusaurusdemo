// Note: importing from "@theme/Footer" would fail due to the file importing itself
import OriginalFooter from '@theme-original/Footer';
import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function Footer(props) {
const location = useLocation();
console.log(location.pathname);


  return (
    <>
      <script async defer src="https://teams.microsoft.com/share/launcher.js"></script>
      <div>Share this page in MS Teams <a class="teams-share-button" data-href={"https://sachipanda.github.io" + location.pathname}>Share this link</a></div>
      <OriginalFooter {...props} />
    </>
  );
}
