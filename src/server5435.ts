
const express = require('express')
import {handler5435} from "./handler5435";
const app = express()
app.get('/5435', handler5435)
app.listen(3000, () => {})
        