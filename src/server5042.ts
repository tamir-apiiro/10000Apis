
const express = require('express')
import {handler5042} from "./handler5042";
const app = express()
app.get('/5042', handler5042)
app.listen(3000, () => {})
        