
const express = require('express')
import {handler5181} from "./handler5181";
const app = express()
app.get('/5181', handler5181)
app.listen(3000, () => {})
        