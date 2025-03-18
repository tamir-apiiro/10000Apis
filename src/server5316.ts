
const express = require('express')
import {handler5316} from "./handler5316";
const app = express()
app.get('/5316', handler5316)
app.listen(3000, () => {})
        