
const express = require('express')
import {handler5986} from "./handler5986";
const app = express()
app.get('/5986', handler5986)
app.listen(3000, () => {})
        