// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7

//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(45)
// console.log(dogAge)

// const dogBreed = (dogBreedStringPlaceHolder) => {
//    return "My favorite dog breed is ${dogBreedStringPlaceHolder}"
//    const myFavorite = dogBreed()
// }

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const filterOutKWords = (arrayOfWords) => {
    let wordsWithoutK = []
    for (const word of arrayOfWords) {
        if (!word.startsWith("k")) {
            wordsWithoutK.push(word)

        }

    }
    return wordsWithoutK
}

let testingFunction = filterOutKWords(words)
console.log(testingFunction);
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */

const singleStringBuilder = (arrayOfStrings) => {
   let joined =  arrayOfStrings.join(" ")
   return joined
}
 let testing = singleStringBuilder(words)
 console.log(testing);
/*
    Invoke the filtering function and store its return value
 */

let filteringFunctionForWords = filterOutKWords(words)
let filteringFunctionForConstitutionPreamble = filterOutKWords(constitutionPreamble)
console.log(filteringFunctionForConstitutionPreambleArray)
console.log(filteringFunctionForWordsArray);
/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
console.log(singleStringBuilder(filteringFunctionForWordsArray))
console.log(singleStringBuilder(filteringFunctionForConstitutionPreamble))

console.log()


const filterOutKWordWithForEach = () => {
    let wordsWithoutK = []
    arrayOfWords.forEach(word => {
        if(!word.startsWith("k")) {
            wordsWithoutK.push(word)
        }
    });
    return wordsWithoutK
}
