
const express = require('express')
import {handler5160} from "./handler5160";
const app = express()
app.get('/5160', handler5160)
app.listen(3000, () => {})
        