
const express = require('express')
import {handler5120} from "./handler5120";
const app = express()
app.get('/5120', handler5120)
app.listen(3000, () => {})
        