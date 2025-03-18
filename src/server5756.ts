
const express = require('express')
import {handler5756} from "./handler5756";
const app = express()
app.get('/5756', handler5756)
app.listen(3000, () => {})
        