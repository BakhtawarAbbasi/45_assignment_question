// QNO : 1
// 1. Install Node.js, TypeScript and VS Code on your computer.
//  Done 
// QNO : 2
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let myName = "BAkhtawar"; //This saves the name
console.log(`Hello ${myName}, would you like to learn some Typescript today?`); //This shows the message
// QNO : 3
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myname = "Bakhtawar"; // This saves the name
console.log(myname.toLowerCase()); //shows the name in all small letters
console.log(myname.toUpperCase()); //shows the name in all ig letters
console.log(myname.charAt(0).toUpperCase() + myname.slice(1).toLowerCase()); //shows the name with the first letter Big.
// QNO : 4
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
// QNO : 5
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "ALbert Einsein";
let message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
// QNO : 6
//6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let Name = "\t\n Bakhtawar \t\n"; //This saves the name with witespace
console.log(Name); //Shows the name with whitespace
console.log(Name.trim()); //Shows the name without whitespace
// QNO : 7
//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
// QNO : 8
//8.You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// QNO : 9
// 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 42;
let messages = `My favorite number is ${favoriteNumber}.`;
console.log(messages); // Output: My favorite number is 42.
// QNO : 10
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
let my_name = "Bakhtawar";
console.log(`Hello ${my_name}, would you like to learn some TypeScript today?`);
// QNO : 11
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// QNO : 12
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Names = ["Alice", "Bob", "Charlie"];
for (let name of Names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}
// QNO : 13
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
// QNO : 14
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests = ["Maryam", "Urooj", "Nikola Saba"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// QNO : 15
// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// QNO : 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
//QNO : 17
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.// • Print a message to each of the two people still on your list, letting them know they’re still invited.// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
// Qno : 18
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
let places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
//console.log("Original order")
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
// QNO : 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest = ["Maryam", "Bob", " Alice", "Isaac Newton", "Ur"];
console.log(`I am inviting ${guest.length} people to dinner.`);
// QNO : 20
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);
//QNO : 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);
// QNO : 22
//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid i
//QNO : 23
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = "subaru";
console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");
console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");
// QNO: 24
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("Apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
// QNO: 25
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
// QNO: 26
// 26.  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// Version that passes:
// let alien_color = "green";
// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien");
}
else {
    console.log("You just earned 10 points");
}
// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
// QNO: 27
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
alien_color = "pink";
// Green alien version:
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
// Red alien version:
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
// QNO : 28
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// QNO : 29
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits = ["apples", "bananas", "cherries"];
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
// Continue with more fruits
// QNO : 30
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let username = ["admin", "user1", "user2", "user3", "user4"];
username.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for loggin in again.`);
    }
});
// QNO : 31
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet Users 
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
// QNO : 32
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
// QNO : 33
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
// QNO : 34
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
// QNO : 35
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["dog", "cat", "rabbit"];
animals.forEach((animal) => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// QNO : 36
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("medium", "Code is Life");
// QNO : 37
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirts(); // Default large and message
make_shirts("medium"); // Default message, medium size
make_shirts("small", "Dive into Coding"); // Custom message, small size
// QNO : 38
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
// QNO : 39
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums
const album1 = make_album("Taylor Swift", "1989");
const album2 = make_album("Kanye West", "My Beautiful Dark Twisted Fantasy");
const album3 = make_album("Adele", "25", 11);
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
// QNO : 41
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Taimor", "Mohsin", "Zahid"];
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicians);
// QNO : 42
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//using the answer 41 magicians array
function make_great(magicians) {
    magicians.forEach(magicians => {
        console.log(`${magicians} the great`);
    });
}
make_great(magicians);
// QNO : 43
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians1 = ["Taimor", "Mohsin", "Zahid"];
function theGreat(magicians1) {
    let great_magicians1 = [];
    magicians1.forEach(element => {
        great_magicians1.push(`${element}, the great`);
    });
    return great_magicians1;
}
let great_magicians1 = theGreat(magicians1.slice()); //creates a new mmodified array
console.log("Original magicians:");
show_magicians(magicians); //shows original names
console.log("Great Magicians:");
show_magicians(great_magicians1); //shows modified names
// QNO : 44
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
function create_car(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}
// Creating a car object with additional properties
const myCar = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);
// Printing the car object
console.log(myCar);
export {};
