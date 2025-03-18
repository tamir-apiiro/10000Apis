
const express = require('express')
import {handler5591} from "./handler5591";
const app = express()
app.get('/5591', handler5591)
app.listen(3000, () => {})
        