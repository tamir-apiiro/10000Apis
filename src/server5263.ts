
const express = require('express')
import {handler5263} from "./handler5263";
const app = express()
app.get('/5263', handler5263)
app.listen(3000, () => {})
        