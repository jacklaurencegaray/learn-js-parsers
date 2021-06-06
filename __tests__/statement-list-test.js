module.exports = (test) => {
    test(`42; "hello";`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'NumericLiteral',
                    value: 42,
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'StringLiteral',
                    value: 'hello',
                },
            },
        ],
    })
}
