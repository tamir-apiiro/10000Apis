
const express = require('express')
import {handler5178} from "./handler5178";
const app = express()
app.get('/5178', handler5178)
app.listen(3000, () => {})
        