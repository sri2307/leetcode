const interpret = (s) => {
    return s.replaceAll('()','o').replaceAll('(al)','al')
};

const input="G()(al)";

const output=interpret(input);

console.log(output)

