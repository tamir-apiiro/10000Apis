
const express = require('express')
import {handler5428} from "./handler5428";
const app = express()
app.get('/5428', handler5428)
app.listen(3000, () => {})
        