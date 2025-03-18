
const express = require('express')
import {handler5977} from "./handler5977";
const app = express()
app.get('/5977', handler5977)
app.listen(3000, () => {})
        