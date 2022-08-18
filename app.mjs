function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const numberPrefixes = [
    //MTN numbers
    ["0803", "0806", "0703", "0706", "0810", "0813", "0814", "0816",
      "0903", "0906", "+234803", "+234806", "+234703", "+234706",
      "+234810", "+234813", "+234814", "+234816", "+234903", "+234906"],

    //GLO numbers
    ["0805", "0807", "0811", "0705", "0815", "0905", "+234805",
      "+234807", "+234811", "+234705", "+234815", "+234905"],

    //9Mobile Numbers
    ["0809", "0817", "0818", "0908", "0909", "+234809", "+234817",
      "+234818", "+234908", "+234909", "+234809", "+234817"],

    //NTEL numbers
    ["0804", "+234804"],

    //SMILE numbers
    ["0702", "+234702"],

    //AIRTEL numbers
    ["0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901",
      "+234802", "+234808", "+234812", "+234701", "+234708",
      "+234902", "+234907", "+234901"]
  ];

  const img = document.createElement("img");
  img.style.maxWidth = "40px"
  img.style.width = "inherit"
  img.style.borderRadius = "5px"
  img.style.margin = "4px 4px 0px 0px"
  let block = document.getElementById("sp")

  const x = document.querySelector("input")

  x.oninput = getCarrier;

  function validateInput(input) {
    if (input.startsWith("+234")) {
      x.maxLength = "14";
    } else {
      x.maxLength = "11";
    }
  }

  function getCarrier() {
    let phoneNumber = document.getElementById("phone-number").value;

    validateInput(phoneNumber);

    for (let i = 0; i < numberPrefixes.length; i++) {
      for (let j = 0; j < numberPrefixes[i].length; j++) {
        if (phoneNumber.startsWith(numberPrefixes[0][j]) == true) {
          console.log("MTN")
          img.src = "images/mtn.jpg";
          block.appendChild(img)
          return
        } else if (phoneNumber.startsWith(numberPrefixes[1][j]) == true) {
          console.log("GLO")
          img.src = "images/glo.jpg";
          block.appendChild(img)
          return
        } else if (phoneNumber.startsWith(numberPrefixes[2][j]) == true) {
          console.log("9Mobile")
          img.src = "images/9mobile.jpg";
          block.appendChild(img)
          return
        } else if (phoneNumber.startsWith(numberPrefixes[3][j]) == true) {
          console.log("NTEL")
          img.src = "images/ntel.jpg";
          block.appendChild(img)
          return
        } else if (phoneNumber.startsWith(numberPrefixes[4][j]) == true) {
          console.log("SMILE")
          img.src = "images/smile.jpg";
          block.appendChild(img)
          return
        } else if (phoneNumber.startsWith(numberPrefixes[5][j]) == true) {
          console.log("AIRTEL")
          img.src = "images/airtel.jpg";
          block.appendChild(img)
          return
        } img.remove()
      }
    }
  }


};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
