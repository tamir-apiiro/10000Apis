
const express = require('express')
import {handler5735} from "./handler5735";
const app = express()
app.get('/5735', handler5735)
app.listen(3000, () => {})
        