/*
EmbedFonts nuggets : V1.0
Date: 2023.11.25
Creator: Loïc Béard

Nuggets - 2023 - all rights reserved
https://nuggets.cooking

needs 'core/globals'
needs 'customization/CustomCSS'

/**/


const EmbedFonts = {

  import: ($folder, $name, $font, $style, $weight) => {
    
    const _url = ($ext) => `url('story_content/WebObjects/${$folder}/${$font||$name}.${$ext}')`;

    CustomCSS.newRule(`
      @font-face {
        font-family: '${$name}';
        font-style: ${$style || 'normal'};
        font-weight: ${$weight || 'normal'};
        src: ${_url('eot')},
          local('☺'),
          ${_url('woff')} format('woff'),
          ${_url('ttf')} format('truetype'),
          ${_url('svg')} format('svg');
      }
    `);
  }

};
