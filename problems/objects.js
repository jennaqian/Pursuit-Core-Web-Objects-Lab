/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} peopleWithApples
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name. Return the number
 * of apples that the person passed in has.
 * If the person does not exist in the object it should return 0.
 * @param {Object} peopleWithApples
 * @param {string} name - name of person
 * @returns {number} The number of apples name has.
 *
 * Is there a difference between using string notation vs
 * bracket notation? Try them both.
 */

const appleCount = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Also takes in a new number of apples for Eve.
 * Reassign her number of apples to the new value and then return
 * the original object.
 *
 * @param {Object} peopleWithApples
 * @param {number} appleCount - new number of apples
 * @returns {Object} The updated object.
 */

const eveAppleSet = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name, and the argument newNumberApple .
 * Update the object to have the name pointing to the newNumberApple
 * @param {Object} peopleWithApples - apple object with names and numbers
 * @param {string} name - name of person
 * @param {number} appleCount - number of apples
 * @returns {Object} The updated object.
 *
 */

const appleSet = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Should return the total number of apples for Adam and Eve.
 * @param {Object} peopleWithApples - apple object with names and numbers
 * @returns {number} Sum of Adam and Eve's apples.
 *
 */

const adamAndEveApples = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Returns the sum of all apples
 * @param {Object} peopleWithApples - apple object with names and numbers
 * @returns {number} Sum of all apples
 *
 */

const appleSum = () => {};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {Object} peopleWithApples - apple object with names and numbers
 * @returns {Object} Object with values set to zero.
 *
 */

const appleSetToZero = () => {};

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {Object} countriesAndCapitals - countries and capitals
 * @returns {string} Capital of Russia
 */

const russiaCapital = () => {};

/**
 * Takes in an object of countries and their capitals.
 * Takes in a country
 * Return the capital of country given.
 *
 * @param {Object} countriesAndCapitals - countries and capitals
 * @param {string} country
 * @returns {string} Capital of country
 */

const getCapital = () => {};

/**
 * Takes in an object of countries and their capitals
 * and adds the key value pair "Jamaica" and "Kingston"
 * Return the original object.
 *
 * @param {Object} countriesAndCapitals - countries and capitals
 * @returns {Object} countriesAndCapitals now with Jamaica
 */

const addsJamaica = () => {};

/**
 * Takes in an object of countries and their capitals
 * and a country and capital. The country and capital should be
 * added to the object.
 * Return the original object.
 *
 * @param {Object} countriesAndCapitals - countries and capitals
 * @param {string} country
 * @param {string} capital
 * @returns {Object} countriesAndCapitals
 */

const addsCountry = () => {};

/**
 * Takes an array of arrays. First element of inner array is authorName, second element
 * of inner array is score.
 * Return an object where the keys are the authorNames and
 * the values are the scores.
 * @param {Array[]} authors - array of arrays [["Mark Twain", 8.9], ["Nathaniel Hawthorne", 5.1]]
 * @returns {Object} {"Mark Twain": 8.9, "Nathaniel Hawthorne": 5.1}
 */

const authorScores = () => {};

/**
 * You are given an array of objects.
 * Each object in the array describes the score of a person.
 *  Find the person with the best score and return their full name.
 * @param {Object[]} peopleAndScores - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

const bestScore = () => {};

/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {};

/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's.
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

const countAandE = () => {};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = () => {};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

const countOccuranceNoSpaces = () => {};

/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = () => {};

/**
 * Takes in an object and an array.
 * Returns a new array.
 * If the element in the array is a key in the object the new
 * array should have the value in its place. Otherwise just use the array element.
 *
 * Exp Input:
 * {"Ed Sheeran": "guitar", "Ray Charles": "piano"}
 * ["Ed Sheeran", "John Lennon", "Ray Charles"]
 *
 * Output:
 * ["guitar", "John Lennon", "piano"]
 *
 * @param {Object} pairs
 * @param {string[]} arr
 * @returns {string[]} Elements or their pair values. 
 */

const updateList = () => {};

/**
 * Takes in an object and a key. 
 * It should delete the key value pair from the object and 
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key. 
 */

 const deleteKey = () => {};


 /**
  * Takes in an object and returns the number of 
  * properties it has. 
  * @param {Object} obj
  * @returns {number} Number of properties.
  */
 const propertyCount = () => {};

module.exports = {
  eveAppleCount,
  appleCount,
  eveAppleSet,
  appleSet,
  adamAndEveApples,
  appleSum,
  appleSetToZero,
  russiaCapital,
  getCapital,
  addsJamaica,
  addsCountry,
  authorScores,
  bestScore,
  cubeObj,
  countAandE,
  countOccurance,
  countOccuranceNoSpaces,
  mostCommonElement,
  updateList,
  deleteKey,
  propertyCount,
};
