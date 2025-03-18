
const express = require('express')
import {handler5140} from "./handler5140";
const app = express()
app.get('/5140', handler5140)
app.listen(3000, () => {})
        