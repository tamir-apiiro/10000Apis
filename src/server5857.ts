
const express = require('express')
import {handler5857} from "./handler5857";
const app = express()
app.get('/5857', handler5857)
app.listen(3000, () => {})
        