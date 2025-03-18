
const express = require('express')
import {handler5881} from "./handler5881";
const app = express()
app.get('/5881', handler5881)
app.listen(3000, () => {})
        