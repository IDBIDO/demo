var user = {
    name: "Tom", 
    age: 20,
    gender: "male",
    eat: function() {
        alert("ssss")
    }
}

//alert(user.name);
//user.eat();

var jsonStr = '{"name":"Jerry", "age":18, "addr":["bejing", "shangai"]}'
//alert(jsonStr); // all string

// transform to json object
var objJson = JSON.parse(jsonStr);
//alert(objJson.name); //only name value

// transform to json string
var jsonStr = JSON.stringify(objJson);
//alert(jsonStr) // all string


//BOM: Window, Location

// windows:
    //history
    //location
// var location = location.href;
// console.log(location);
// location.href("www.google.com")
    //navidator
    
    //alert()
window.alert("Hellow window")
    //confirm()
var r = window.confirm("ssssss")    // boolean

    //setinterval() periodical
var i = 0;
setInterval(function(){
    //i++;
    //console.log(i);
}, 2000)

    //setTimeout()  once
setTimeout(function(){
    //console.log("time out");
}, 3000
)


// DOM document Object Model 
// Document -> Element -> Attribute -> Text 
// Get element
    // 1. ID
    // 2. Label
    // 3. name
    // 4. class


// // EVENTs
// //1. using HTML label attributes
// <input type="button" onclick="on" value="Button1">
// <script>
//     function on() {
//         alert("click")
//     }
// </script>

// //2. with DOM elements attributes 
// <input type="button" id='btn' value='Button1'></input>
// <script>
//     document.getElementById('btn').onclick = function() {
//         alert("click")
//     }
// </script>










