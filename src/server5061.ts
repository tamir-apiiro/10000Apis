
const express = require('express')
import {handler5061} from "./handler5061";
const app = express()
app.get('/5061', handler5061)
app.listen(3000, () => {})
        