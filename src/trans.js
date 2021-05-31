const babel = require('@babel/core');
const code = `
const message = "This is test message for string literal"
const test = "aa"
`;

const catify = () => {
  return {
    visitor: {
      StringLiteral(path) {
        const newNode = babel.types.StringLiteral("I love cats")
        path.replaceWith(newNode);
        path.skip();
      }
    }
  };
}

const output = babel.transformSync(code, {
  plugins: [
    catify
  ],
});
console.log(output.code);