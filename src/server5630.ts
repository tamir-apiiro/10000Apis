
const express = require('express')
import {handler5630} from "./handler5630";
const app = express()
app.get('/5630', handler5630)
app.listen(3000, () => {})
        