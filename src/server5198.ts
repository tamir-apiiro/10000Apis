
const express = require('express')
import {handler5198} from "./handler5198";
const app = express()
app.get('/5198', handler5198)
app.listen(3000, () => {})
        