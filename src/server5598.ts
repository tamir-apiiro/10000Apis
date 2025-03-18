
const express = require('express')
import {handler5598} from "./handler5598";
const app = express()
app.get('/5598', handler5598)
app.listen(3000, () => {})
        