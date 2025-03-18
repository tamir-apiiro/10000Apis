
const express = require('express')
import {handler5625} from "./handler5625";
const app = express()
app.get('/5625', handler5625)
app.listen(3000, () => {})
        