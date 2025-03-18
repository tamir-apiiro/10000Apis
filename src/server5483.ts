
const express = require('express')
import {handler5483} from "./handler5483";
const app = express()
app.get('/5483', handler5483)
app.listen(3000, () => {})
        