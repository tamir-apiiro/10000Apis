
const express = require('express')
import {handler5600} from "./handler5600";
const app = express()
app.get('/5600', handler5600)
app.listen(3000, () => {})
        