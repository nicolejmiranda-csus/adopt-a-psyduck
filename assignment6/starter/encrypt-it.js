/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the page after it has loaded.
   * Sets up event listeners for the Encrypt and Reset buttons.
   */
  function init() {
    console.log("Window loaded!");

    // Reference to buttons
    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");

    // Event listeners
    encryptButton.addEventListener("click", handleEncryptIt);
    resetButton.addEventListener("click", handleReset);
  }

  // Functions

  /**
   * Handles functionality for the Encrypt button.
   * Pulls the text from the input area and encrypts it using shiftCipher()
   * It then displays the result to the result area.
   */
  function handleEncryptIt() {
    console.log("Encrypt button clicked!");
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * Handles functionality for the Reset button.
   * Clears both the input and result text area.
   */
  function handleReset() {
    console.log("Reset button clicked!");
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    
    return result;
  }

})();
