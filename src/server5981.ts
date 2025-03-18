
const express = require('express')
import {handler5981} from "./handler5981";
const app = express()
app.get('/5981', handler5981)
app.listen(3000, () => {})
        