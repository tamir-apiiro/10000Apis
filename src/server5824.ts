
const express = require('express')
import {handler5824} from "./handler5824";
const app = express()
app.get('/5824', handler5824)
app.listen(3000, () => {})
        