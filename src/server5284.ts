
const express = require('express')
import {handler5284} from "./handler5284";
const app = express()
app.get('/5284', handler5284)
app.listen(3000, () => {})
        