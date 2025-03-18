
const express = require('express')
import {handler5920} from "./handler5920";
const app = express()
app.get('/5920', handler5920)
app.listen(3000, () => {})
        