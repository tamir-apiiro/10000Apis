
const express = require('express')
import {handler5332} from "./handler5332";
const app = express()
app.get('/5332', handler5332)
app.listen(3000, () => {})
        