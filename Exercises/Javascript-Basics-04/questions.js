
const stringSize = (text) => { return text.length;

}
const replaceCharacterE = (text) => { return text.replace("e", " ");

}
const concatString = (text1, text2) => { return text1.concat(text2);

}
const showChar5 = (text) => { return text[4];

}
const showChar9 = (text) => { return text.substring(0,9);

}
const toCapitals = (text) => { return text.toUpperCase();

}
const toLowerCase = (text) => { return text.toLowerCase();

}
const removeSpaces = (text) => { return text.trim();

}
const IsString = (text) => { return (text=='string');

}

const getExtension = (text) => { return text.split('.').pop();

}
const countSpaces = (text) => { return (text.split(" ").length - 1);

}
const InverseString = (text) => { return str.split("").reverse().join("");

}

const power = (x, y) => { return Math.pow(x, y);

}
const absoluteValue = (num) => { return Math.absolute (num);

}
const absoluteValueArray = (array) => { return Math.absolute([array])

}
const circleSurface = (radius) => { return radius * radius * Math.PI;

}
const hypothenuse = (ab, ac) => { return Math.hypot(ab,ac);

}
const BMI = (weight, height) => {

}

const createLanguagesArray = () => { const languages = ["Html","CSS","Java","PHP"];
return languages;

}

const createNumbersArray = () => { const numbers = [0,1,2,3,4,5];
return numbers;

}

const replaceElement = (languages) => {
    languages[2]='Javascript';
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages; 
}

const addNumberElement = (numbers) => {
    numbers.unshift("-2", "-1"); 
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;

}

const removeLast = (languages) => {
    languages.slice(-1);
    return languages;

}

const convertStrToArr = (social_arr) => { social_arr.split(',');
return social_arr;

}

const convertArrToStr = (languages) => { languages.toString();
    return languages;

}

const sortArr = (social_arr) => { social_arr.sort();
    return social_arr;

}

const invertArr = (social_arr) => { social_arr.reverse();
    return social_arr;

}