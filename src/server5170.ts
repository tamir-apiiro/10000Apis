
const express = require('express')
import {handler5170} from "./handler5170";
const app = express()
app.get('/5170', handler5170)
app.listen(3000, () => {})
        