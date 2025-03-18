
const express = require('express')
import {handler5060} from "./handler5060";
const app = express()
app.get('/5060', handler5060)
app.listen(3000, () => {})
        