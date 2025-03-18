
const express = require('express')
import {handler5383} from "./handler5383";
const app = express()
app.get('/5383', handler5383)
app.listen(3000, () => {})
        