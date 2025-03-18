
const express = require('express')
import {handler5506} from "./handler5506";
const app = express()
app.get('/5506', handler5506)
app.listen(3000, () => {})
        