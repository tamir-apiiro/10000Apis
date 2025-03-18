
const express = require('express')
import {handler5371} from "./handler5371";
const app = express()
app.get('/5371', handler5371)
app.listen(3000, () => {})
        