
const express = require('express')
import {handler5656} from "./handler5656";
const app = express()
app.get('/5656', handler5656)
app.listen(3000, () => {})
        