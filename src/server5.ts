
const express = require('express')
import {handler5} from "./handler5";
const app = express()
app.get('/5', handler5)
app.listen(3000, () => {})
        