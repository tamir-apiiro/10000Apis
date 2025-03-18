
const express = require('express')
import {handler5679} from "./handler5679";
const app = express()
app.get('/5679', handler5679)
app.listen(3000, () => {})
        