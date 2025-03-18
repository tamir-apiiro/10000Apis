
const express = require('express')
import {handler5044} from "./handler5044";
const app = express()
app.get('/5044', handler5044)
app.listen(3000, () => {})
        