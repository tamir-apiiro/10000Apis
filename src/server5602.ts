
const express = require('express')
import {handler5602} from "./handler5602";
const app = express()
app.get('/5602', handler5602)
app.listen(3000, () => {})
        