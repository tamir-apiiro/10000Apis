
const express = require('express')
import {handler5639} from "./handler5639";
const app = express()
app.get('/5639', handler5639)
app.listen(3000, () => {})
        