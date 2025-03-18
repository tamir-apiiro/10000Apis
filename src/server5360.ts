
const express = require('express')
import {handler5360} from "./handler5360";
const app = express()
app.get('/5360', handler5360)
app.listen(3000, () => {})
        