
const express = require('express')
import {handler5204} from "./handler5204";
const app = express()
app.get('/5204', handler5204)
app.listen(3000, () => {})
        