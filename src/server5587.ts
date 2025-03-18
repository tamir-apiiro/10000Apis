
const express = require('express')
import {handler5587} from "./handler5587";
const app = express()
app.get('/5587', handler5587)
app.listen(3000, () => {})
        