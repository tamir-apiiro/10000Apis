
const express = require('express')
import {handler5049} from "./handler5049";
const app = express()
app.get('/5049', handler5049)
app.listen(3000, () => {})
        