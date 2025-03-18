
const express = require('express')
import {handler5134} from "./handler5134";
const app = express()
app.get('/5134', handler5134)
app.listen(3000, () => {})
        