
const express = require('express')
import {handler5395} from "./handler5395";
const app = express()
app.get('/5395', handler5395)
app.listen(3000, () => {})
        