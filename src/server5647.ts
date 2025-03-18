
const express = require('express')
import {handler5647} from "./handler5647";
const app = express()
app.get('/5647', handler5647)
app.listen(3000, () => {})
        