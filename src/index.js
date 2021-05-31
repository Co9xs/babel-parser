const { parse } = require("@babel/parser")
const { default: generate } = require("@babel/generator")
const { default: traverse } = require("@babel/traverse");
const { Text2Emoji } = require("./Text2Emoji");

const converter = new Text2Emoji({
  emojis: ["🐈", "🦍", "🐵", "🐶"]
})

const code = `
let name = "Fujishima"
`

const ast = parse(code)
const visitor = {
  Identifier(nodePath) {
    const emoji = converter.convert(nodePath.node.name)
    nodePath.replaceWithSourceString(
      emoji
    )
    nodePath.skip();
  }
};
traverse(ast, visitor);

const { code: output } = generate(ast)
console.log(output);
