
const express = require('express')
import {handler5668} from "./handler5668";
const app = express()
app.get('/5668', handler5668)
app.listen(3000, () => {})
        