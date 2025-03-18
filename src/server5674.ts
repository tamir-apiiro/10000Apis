
const express = require('express')
import {handler5674} from "./handler5674";
const app = express()
app.get('/5674', handler5674)
app.listen(3000, () => {})
        