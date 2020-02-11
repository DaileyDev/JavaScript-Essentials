//Profile Lookup
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return "No such contact".
// If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name ) {
        return contacts[i][prop] || "No Such Property";
     }
    }
        return "No Such Contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

//write a for loop to check each element in the array contacts list. With the if statement we are checking to see if the name that was passed in matches any on the contacts list. IF it does match we will
// return the values on the property of that name. Or (||) if the property that was passed in with name does not exist we will return the string "No Such Property" . IF the name passed in is not in the 
//array we will return the string "no Such contact" 