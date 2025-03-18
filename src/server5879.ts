
const express = require('express')
import {handler5879} from "./handler5879";
const app = express()
app.get('/5879', handler5879)
app.listen(3000, () => {})
        