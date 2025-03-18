
const express = require('express')
import {handler5285} from "./handler5285";
const app = express()
app.get('/5285', handler5285)
app.listen(3000, () => {})
        