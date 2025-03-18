
const express = require('express')
import {handler5079} from "./handler5079";
const app = express()
app.get('/5079', handler5079)
app.listen(3000, () => {})
        