
const express = require('express')
import {handler5804} from "./handler5804";
const app = express()
app.get('/5804', handler5804)
app.listen(3000, () => {})
        