
const express = require('express')
import {handler5289} from "./handler5289";
const app = express()
app.get('/5289', handler5289)
app.listen(3000, () => {})
        