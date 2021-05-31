const { parse } = require("@babel/parser")
const { default: generate } = require("@babel/genrator")

const code = `
let name = "Fujishima"
`

const ast = parse(code)

const { code: output } = generate(ast)
console.log(output)