
const express = require('express')
import {handler5754} from "./handler5754";
const app = express()
app.get('/5754', handler5754)
app.listen(3000, () => {})
        