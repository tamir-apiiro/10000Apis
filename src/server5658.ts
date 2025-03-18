
const express = require('express')
import {handler5658} from "./handler5658";
const app = express()
app.get('/5658', handler5658)
app.listen(3000, () => {})
        