
const express = require('express')
import {handler5932} from "./handler5932";
const app = express()
app.get('/5932', handler5932)
app.listen(3000, () => {})
        