
const express = require('express')
import {handler5482} from "./handler5482";
const app = express()
app.get('/5482', handler5482)
app.listen(3000, () => {})
        