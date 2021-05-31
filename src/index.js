const { parse } = require("@babel/parser")
const { default: generate } = require("@babel/generator")

const code = `
let name = "Fujishima"
`

const ast = parse(code)

const { code: output } = generate(ast)
console.log(output)