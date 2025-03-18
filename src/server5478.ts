
const express = require('express')
import {handler5478} from "./handler5478";
const app = express()
app.get('/5478', handler5478)
app.listen(3000, () => {})
        