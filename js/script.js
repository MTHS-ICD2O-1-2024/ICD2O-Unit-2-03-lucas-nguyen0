// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Mar 2025
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const streetNumeber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value
  // output
    document.getElementById("address").innerHTML =
    "Your address is: " + streetNumeber + ", " + streetName + "."
}
