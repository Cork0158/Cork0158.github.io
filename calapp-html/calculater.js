import { MyLexer } from "./mylexer.js"

export class MyLang {
    constructor() {}

    exec(str) {
        return this.expression(new MyLexer(str))
    }

    expression(lexer) {
        let result = 1
        if (lexer.read() === '+') {
            lexer.next()
        } else if (lexer.read() === '-') {
            result = -1
            lexer.next()
        }
        result *= Number(this.term(lexer))

        while (lexer.read() === '+' || lexer.read() === '-') {
            switch (lexer.next()) {
                case '+':
                    result += Number(this.term(lexer))
                    break
                case '-':
                    result -= Number(this.term(lexer))
                    break
            }
        }
        return result
    }

    term(lexer) {
        let result = this.factor(lexer)
        while (lexer.read() === '*' || lexer.read() === '/') {
            switch (lexer.next()) {
                case '*':
                    result *= Number(this.factor(lexer))
                    break
                case '/':
                    result /= Number(this.factor(lexer))
                    break
            }
        }
        return result
    }

    factor(lexer) {
        if (lexer.read() === '(') {
            lexer.next()
            let result = this.expression(lexer)
            if (lexer.read() === ')') {
                lexer.next()
            }
            else {
                //console.log('Syntax Error! : unexpected charactor = ', lexer.read())
                result = "Error";
            }
            return result
        }
        else {
            return lexer.next()
        }
    }
}
