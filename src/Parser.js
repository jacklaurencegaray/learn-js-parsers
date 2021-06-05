const { Tokenizer } = require("./Tokernizer")

class Parser {
 /**
  * Parses a string into an AST
  */
 parse(string) {
  this._string = string
  return this.Program()
 }

 /** Main entry point
  *
  * Program
  * 	: NumericLiteral
  * ;
  */

 Program() {
  return {
   type: "Program",
   body: this.NumericLiteral(),
  }
 }

 /**
  * NumericLiteral
  * 	: NUMBER
  */
 NumericLiteral() {
  return {
   type: "NumericLiteral",
   value: Number(this._string),
  }
 }
}

module.exports = {
 Parser,
}
