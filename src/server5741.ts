
const express = require('express')
import {handler5741} from "./handler5741";
const app = express()
app.get('/5741', handler5741)
app.listen(3000, () => {})
        