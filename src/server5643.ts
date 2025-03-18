
const express = require('express')
import {handler5643} from "./handler5643";
const app = express()
app.get('/5643', handler5643)
app.listen(3000, () => {})
        