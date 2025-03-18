
const express = require('express')
import {handler5172} from "./handler5172";
const app = express()
app.get('/5172', handler5172)
app.listen(3000, () => {})
        