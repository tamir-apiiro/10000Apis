
const express = require('express')
import {handler5540} from "./handler5540";
const app = express()
app.get('/5540', handler5540)
app.listen(3000, () => {})
        