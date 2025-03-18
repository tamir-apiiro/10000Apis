
const express = require('express')
import {handler5155} from "./handler5155";
const app = express()
app.get('/5155', handler5155)
app.listen(3000, () => {})
        