
const express = require('express')
import {handler5302} from "./handler5302";
const app = express()
app.get('/5302', handler5302)
app.listen(3000, () => {})
        