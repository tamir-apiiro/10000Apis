
const express = require('express')
import {handler5393} from "./handler5393";
const app = express()
app.get('/5393', handler5393)
app.listen(3000, () => {})
        