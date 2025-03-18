
const express = require('express')
import {handler5232} from "./handler5232";
const app = express()
app.get('/5232', handler5232)
app.listen(3000, () => {})
        