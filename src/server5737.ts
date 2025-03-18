
const express = require('express')
import {handler5737} from "./handler5737";
const app = express()
app.get('/5737', handler5737)
app.listen(3000, () => {})
        