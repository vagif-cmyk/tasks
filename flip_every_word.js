// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// my solution)
function solution(str, ending) {
    const reg = Array.from(ending).map(element => {
        if (element === '('
            || element === ')'
            || element === '{'
            || element === '}') {
            return `\\${element}`;
        }
        else { return element; }
    })
        .join('');
    return new RegExp(`${reg}$`).test(str);
}

// best solution
function reverseWords(str) {
    return str.split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

