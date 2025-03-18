
const express = require('express')
import {handler5870} from "./handler5870";
const app = express()
app.get('/5870', handler5870)
app.listen(3000, () => {})
        