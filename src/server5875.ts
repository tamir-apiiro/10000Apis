
const express = require('express')
import {handler5875} from "./handler5875";
const app = express()
app.get('/5875', handler5875)
app.listen(3000, () => {})
        