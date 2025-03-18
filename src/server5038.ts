
const express = require('express')
import {handler5038} from "./handler5038";
const app = express()
app.get('/5038', handler5038)
app.listen(3000, () => {})
        