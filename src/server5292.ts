
const express = require('express')
import {handler5292} from "./handler5292";
const app = express()
app.get('/5292', handler5292)
app.listen(3000, () => {})
        