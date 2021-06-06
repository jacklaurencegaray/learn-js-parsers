/**
 * Main test runner
 */

const { Parser } = require('../src/Parser')
const assert = require('assert')

const parser = new Parser()

// List of tests
const tests = [require('./literals-test')]

function exec() {
    const program = `42;`

    const ast = parser.parse(program)

    console.log(JSON.stringify(ast, null, 2))
}

function test(program, expected) {
    const ast = parser.parse(program)
    assert.deepEqual(ast, expected)
}

exec()

tests.forEach((testRun) => testRun(test))
console.log('All assertions passed')
