const Spec = [
    // Comments:
    // Skip single-line comments
    [/^\/\/.*/, null],
    // Skip multi-line comments
    [/^\/\*[\s\S]*?\*\//, null],

    // Whitespaces
    [/^\s+/, null],

    // Semicolons
    [/^;/, ';'],

    // Numbers
    [/^\d+/, 'NUMBER'],

    // Strings
    [/"[^"]*"/, 'STRING'],
    [/'[^']*'/, 'STRING'],
]

/**
 * Tokenizer class
 *
 * Lazily pulls token from a stream
 */

class Tokenizer {
    init(string) {
        this._string = string
        this._cursor = 0
    }

    hasMoreTokens() {
        return this._cursor < this._string.length
    }

    isEOF() {
        return this._cursor === this._string.length
    }

    getNextToken() {
        if (!this.hasMoreTokens()) {
            return null
        }

        const string = this._string.slice(this._cursor)

        for (const [regex, tokenType] of Spec) {
            const tokenValue = this._match(regex, string)

            if (tokenValue == null) {
                continue
            }

            if (tokenType == null) {
                return this.getNextToken()
            }

            return {
                type: tokenType,
                value: tokenValue,
            }
        }

        throw new SyntaxError(`Unexpected token: ${string[0]}`)
    }

    _match(regex, string) {
        let matched = regex.exec(string)
        if (matched == null) {
            return null
        }

        this._cursor += matched[0].length
        return matched[0]
    }
}

module.exports = {
    Tokenizer,
}
