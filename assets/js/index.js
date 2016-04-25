/**
 * Main JS file for Casper behaviours
 */

/* globals document */
(function () {
    "use strict";

    var showCommentsClicked = function () {
      var elements = document.getElementsByClassName("show-comments");
      for (i = 0; i < elements.length; i += 1) {
        elements[i].style.display = "none";
      }
      loadDisqus();
    };

    var enableComments = function () {
      var elements = document.getElementsByClassName("show-comments");
      var i;

      for (i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener("click", showCommentsClicked);
      }
    };

    document.addEventListener("DOMContentLoaded", function () {
        enableComments();
    });
}());
