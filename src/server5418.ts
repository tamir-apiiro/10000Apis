
const express = require('express')
import {handler5418} from "./handler5418";
const app = express()
app.get('/5418', handler5418)
app.listen(3000, () => {})
        