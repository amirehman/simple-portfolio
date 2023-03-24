/////////////////////////////////////////////////////////////////////
// Change hex color into RGB /////////////////////////////////////////////////////////////////////
export const getRGBColor = (hex, type) => {
    let color = hex.replace(/#/g, "")
    // rgb values
    var r = parseInt(color.substr(0, 2), 16)
    var g = parseInt(color.substr(2, 2), 16)
    var b = parseInt(color.substr(4, 2), 16)
  
    return `--color-${type}: ${r}, ${g}, ${b};`
  }
  
  /////////////////////////////////////////////////////////////////////
  // Determine the accessible color of text
  /////////////////////////////////////////////////////////////////////
  export const getAccessibleColor = (hex) => {
    let color = hex.replace(/#/g, "")
    // rgb values
    var r = parseInt(color.substr(0, 2), 16)
    var g = parseInt(color.substr(2, 2), 16)
    var b = parseInt(color.substr(4, 2), 16)
    var yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? "#000000" : "#FFFFFF"
  }



//   console.log(a11yColor[1].slice(0, -1))

//   --color-primary: 98, 49, 175;
// --color-a11y: 255, 255, 255;
    // const root = document.querySelector(':root');
    
    const primaryColor = getRGBColor("#84cc16", "primary").split(':')
    const a11yColor = getRGBColor(getAccessibleColor("#84cc16"), "a11y").split(':')
  
    document.documentElement.style.setProperty(primaryColor[0], primaryColor[1].slice(0, -1));
    document.documentElement.style.setProperty(a11yColor[0], a11yColor[1].slice(0, -1));
