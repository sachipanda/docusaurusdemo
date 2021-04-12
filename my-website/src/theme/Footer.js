// Note: importing from "@theme/Footer" would fail due to the file importing itself
import OriginalFooter from '@theme-original/Footer';
import React from 'react';

export default function Footer(props) {
  return (
    <>
      <script async defer src="https://teams.microsoft.com/share/launcher.js"></script>
      <div>Share this page in MS Teams <a class="teams-share-button" data-href="https://sachipanda.github.io/docusaurusdemo/docs/create-a-blog-post">Share this link</a></div>
      <OriginalFooter {...props} />
    </>
  );
}
