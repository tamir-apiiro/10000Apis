
const express = require('express')
import {handler5322} from "./handler5322";
const app = express()
app.get('/5322', handler5322)
app.listen(3000, () => {})
        