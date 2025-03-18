
const express = require('express')
import {handler5642} from "./handler5642";
const app = express()
app.get('/5642', handler5642)
app.listen(3000, () => {})
        