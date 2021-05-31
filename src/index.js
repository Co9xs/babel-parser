const { parse } = require("@babel/parser");
const { default: generate } = require("@babel/generator");
const { default: traverse } = require("@babel/traverse");

const code = 'const n = 1';

// JS→ASTに変換(parse)
const ast = parse(code);

// AST→内容を変えたASTに変換(transform)
traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// AST→JSに変換(unparse)
const output = generate(ast, code);
console.log(output.code);