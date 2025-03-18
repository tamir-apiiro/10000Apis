
const express = require('express')
import {handler5762} from "./handler5762";
const app = express()
app.get('/5762', handler5762)
app.listen(3000, () => {})
        