
const express = require('express')
import {handler5434} from "./handler5434";
const app = express()
app.get('/5434', handler5434)
app.listen(3000, () => {})
        