
const express = require('express')
import {handler5139} from "./handler5139";
const app = express()
app.get('/5139', handler5139)
app.listen(3000, () => {})
        