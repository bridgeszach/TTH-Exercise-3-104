// Challenge 1
const myString = {

    string: "Programming with Treehouse is fun!",
}

// Challenge 2
const myString = {

    string: "Programming with Treehouse is fun!",
    countWords: function () {
        const words = this.string.split(' ');
        return words.length;
    }
}

console.log(myString.string.split(' '));

// Challenge 3
const myString = {

    string: "Programming with Treehouse is fun!",
    countWords: function () {
        const words = this.string.split(' ');
        return words.length;
    }
}

const numWords = myString.countWords();
console.log(numWords);

// Challenge 4
const myString = {

    string: "Programming with Treehouse is fun!",
    countWords: function () {
        const words = this.string.split(' ');
        return words.length;
    }
}

const numWords = myString.countWords();
myString.characters = myString.string.length;

// Challenge 5
const myString = {

    string: "Programming with Treehouse is fun!",
    countWords: function () {
        const words = this.string.split(' ');
        return words.length;
    }
}

const numWords = myString.countWords();

myString.characters = myString.string.length;

myString.string = "I love full stack JavaScript!";