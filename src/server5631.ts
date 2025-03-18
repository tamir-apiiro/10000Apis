
const express = require('express')
import {handler5631} from "./handler5631";
const app = express()
app.get('/5631', handler5631)
app.listen(3000, () => {})
        