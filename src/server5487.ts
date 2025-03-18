
const express = require('express')
import {handler5487} from "./handler5487";
const app = express()
app.get('/5487', handler5487)
app.listen(3000, () => {})
        