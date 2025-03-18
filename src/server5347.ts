
const express = require('express')
import {handler5347} from "./handler5347";
const app = express()
app.get('/5347', handler5347)
app.listen(3000, () => {})
        