'use strict';

// const request = require('request')
// const Task = require('data.task')
// const Either = require('data.either')

// const fs = require('fs')

// const str = fs.readFileSync('inflationMultiplier.csv')
// const multiplier = JSON.parse(str)

// const httpGet = url =>
//     new Task((rej, res) =>
//         request(url, (error, response, body) =>
//             error ? rej(error) : res(body)))

// const getJSON = url =>
//     httpGet(url)
//     .map(parse)
//     .chain(eitherToTask)

// const first = xs =>
//     Either.fromNullable(xs[0])

// const eitherToTask = e =>
//     e.fold(Task.rejected, Task.of)

// const parse = Either.try(JSON.parse)

var getOldPounds = document.getElementById('oldpounds').value;
var getNewPounds = document.getElementById('newpounds2').value;

//convert
var calcOldPounds = function calcOldPounds() {
    var num = 0.4167;
    return getNewPounds / num;
};

var calcNewPounds = function calcNewPounds() {
    var num = 0.4167;
    return getOldPounds * num;
};

//update
var updateNewPounds = function updateNewPounds() {
    var num = 0.4167;
    //document.getElementById('newpounds').innerHTML = document.getElementById('oldpounds').value * 0.4167;
    document.getElementById('newpounds').innerHTML = document.getElementById('oldpounds').value * num;
};

var updateOldPounds = function updateOldPounds(y) {
    //document.getElementById('oldpounds2').innerHTML = y;
    document.getElementById('oldpounds2').innerHTML = document.getElementById('newpounds2').value / 0.4167;
};

function updateOldPoundsES5(y) {
    return document.getElementById('oldpounds').innerHTML = y;
}

//updateNewPounds(calcNewPounds);
//updateOldPounds(calcOldPounds);
//updateOldPoundsES5(calcOldPounds);

function myFunction() {
    var num = 0.4167;
    document.getElementById('newpounds').innerHTML = document.getElementById('oldpounds').value * num;
}

var pounds = function pounds() {
    var num = 0.4167;
    document.getElementById('newpounds').innerHTML = document.getElementById('oldpounds').value * num;
};

var myFunc = function myFunc() {
    result.value = parseInt(a.value) + parseInt(b.value);
};

var poundsShillingsPence = function poundsShillingsPence() {
    //convert to total pence
    var pounds2Pence = document.getElementById('pounds').value * 240;
    var shillings2Pence = document.getElementById('shillings').value * 5;
    var totalPence = pounds2Pence + shillings2Pence + document.getElementById('pence').value;
    return totalPence;
};

/** %%%%%%%%%%%%%%%%%%%%%%%%% auto dropdown %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
// // Get the <datalist> and <input> elements.
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');

// // Create a new XMLHttpRequest.
// var request = new XMLHttpRequest();

// // Handle state changes for the request.
// request.onreadystatechange = function(response) {
//     if (request.readyState === 4) {
//         if (request.status === 200) {
//             // Parse the JSON
//             var jsonOptions = JSON.parse(request.responseText);

//             // Loop over the JSON array.
//             jsonOptions.forEach(function(item) {
//                 // Create a new <option> element.
//                 var option = document.createElement('option');
//                 // Set the value using the item in the JSON array.
//                 option.value = item;
//                 // Add the <option> element to the <datalist>.
//                 dataList.appendChild(option);
//             });

//             // Update the placeholder text.
//             input.placeholder = "e.g. datalist";
//         } else {
//             // An error occured :(
//             input.placeholder = "Couldn't load datalist options :(";
//         }
//     }
// };

// // Update the placeholder text.
// input.placeholder = "Loading options...";

// // Set up and make the request.
// request.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json', true);
// request.send();


module.exports = {
    myFunction: myFunction,
    pounds: pounds,
    updateOldPounds: updateOldPounds,
    updateNewPounds: updateNewPounds,
    updateOldPoundsES5: updateOldPoundsES5,
    //request,
    myFunc: myFunc
};