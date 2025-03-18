
const express = require('express')
import {handler5003} from "./handler5003";
const app = express()
app.get('/5003', handler5003)
app.listen(3000, () => {})
        