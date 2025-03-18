
const express = require('express')
import {handler5597} from "./handler5597";
const app = express()
app.get('/5597', handler5597)
app.listen(3000, () => {})
        