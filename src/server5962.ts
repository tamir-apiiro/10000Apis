
const express = require('express')
import {handler5962} from "./handler5962";
const app = express()
app.get('/5962', handler5962)
app.listen(3000, () => {})
        