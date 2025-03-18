
const express = require('express')
import {handler5297} from "./handler5297";
const app = express()
app.get('/5297', handler5297)
app.listen(3000, () => {})
        