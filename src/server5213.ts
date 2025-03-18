
const express = require('express')
import {handler5213} from "./handler5213";
const app = express()
app.get('/5213', handler5213)
app.listen(3000, () => {})
        