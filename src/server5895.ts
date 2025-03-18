
const express = require('express')
import {handler5895} from "./handler5895";
const app = express()
app.get('/5895', handler5895)
app.listen(3000, () => {})
        