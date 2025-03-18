
const express = require('express')
import {handler5199} from "./handler5199";
const app = express()
app.get('/5199', handler5199)
app.listen(3000, () => {})
        