
const express = require('express')
import {handler5015} from "./handler5015";
const app = express()
app.get('/5015', handler5015)
app.listen(3000, () => {})
        