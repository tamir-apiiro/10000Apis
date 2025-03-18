
const express = require('express')
import {handler5942} from "./handler5942";
const app = express()
app.get('/5942', handler5942)
app.listen(3000, () => {})
        