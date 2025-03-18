
const express = require('express')
import {handler5244} from "./handler5244";
const app = express()
app.get('/5244', handler5244)
app.listen(3000, () => {})
        