
const express = require('express')
import {handler5855} from "./handler5855";
const app = express()
app.get('/5855', handler5855)
app.listen(3000, () => {})
        