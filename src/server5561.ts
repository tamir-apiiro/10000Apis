
const express = require('express')
import {handler5561} from "./handler5561";
const app = express()
app.get('/5561', handler5561)
app.listen(3000, () => {})
        