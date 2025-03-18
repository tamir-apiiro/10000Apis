
const express = require('express')
import {handler5092} from "./handler5092";
const app = express()
app.get('/5092', handler5092)
app.listen(3000, () => {})
        