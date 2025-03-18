
const express = require('express')
import {handler5911} from "./handler5911";
const app = express()
app.get('/5911', handler5911)
app.listen(3000, () => {})
        