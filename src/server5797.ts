
const express = require('express')
import {handler5797} from "./handler5797";
const app = express()
app.get('/5797', handler5797)
app.listen(3000, () => {})
        