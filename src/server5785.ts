
const express = require('express')
import {handler5785} from "./handler5785";
const app = express()
app.get('/5785', handler5785)
app.listen(3000, () => {})
        