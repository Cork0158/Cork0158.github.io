import { MyBuffer } from "./mybuffer.js"

export class MyLexer {
    constructor(str) {
        this.idx = 0
        this.tokens = []
        if (str) {
            this.tokenize(str)
        }
    }

    tokenize(str) {
        this.tokens.splice(0)
        let buf = new MyBuffer(str)

        while (buf.exist()) {
            if (/\d/.test(buf.read())) {
                this.tokens.push(this.getlex_number(buf))
            } else if (/[+\-*/()]/.test(buf.read())) {
                this.tokens.push(this.getlex_symbol(buf))
            } else {
                buf.next()
            }
        }

        return this.tokens
    }

    getlex_number(buf) {
        let num = ''
        while (/\d/.test(buf.read())) {
            num += buf.next()
        }
        return Number(num)
    }

    getlex_symbol(buf) {
        return buf.next()
    }

    exist() {
        if (this.idx < 0) {
            return false
        }
        if (this.tokens.length <= this.idx) {
            return false
        }
        return true
    }

    read() {
        return this.tokens[this.idx]
    }
    next() {
        return this.tokens[this.idx++]
    }
}
