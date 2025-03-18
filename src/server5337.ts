
const express = require('express')
import {handler5337} from "./handler5337";
const app = express()
app.get('/5337', handler5337)
app.listen(3000, () => {})
        