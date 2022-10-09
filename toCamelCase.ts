// Complete the method/function so that it converts dash/underscore delimited words into camel 
// casing. The first word within the output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str: string): string {
  return str
    .split(/[-_]/g)
    .map((item, index) => {
      return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
    })
    .join("");
}

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_stealth-warrior"));
// console.log(toCamelCase("A-B-C"));
// console.log(toCamelCase(""));
