
const express = require('express')
import {handler5627} from "./handler5627";
const app = express()
app.get('/5627', handler5627)
app.listen(3000, () => {})
        