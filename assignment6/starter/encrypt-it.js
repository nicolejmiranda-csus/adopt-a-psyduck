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
    encryptButton.addEventListener("click", handleClick);
    resetButton.addEventListener("click", handleReset);
  }

  // Functions

  /**
   * handleClick()
   */
  function handleClick() {
    console.log("Encrypt button clicked!");
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


})();
