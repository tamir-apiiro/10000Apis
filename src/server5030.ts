
const express = require('express')
import {handler5030} from "./handler5030";
const app = express()
app.get('/5030', handler5030)
app.listen(3000, () => {})
        