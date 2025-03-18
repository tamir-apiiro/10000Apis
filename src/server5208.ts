
const express = require('express')
import {handler5208} from "./handler5208";
const app = express()
app.get('/5208', handler5208)
app.listen(3000, () => {})
        