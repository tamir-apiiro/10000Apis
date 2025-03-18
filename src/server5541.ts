
const express = require('express')
import {handler5541} from "./handler5541";
const app = express()
app.get('/5541', handler5541)
app.listen(3000, () => {})
        