
const express = require('express')
import {handler5832} from "./handler5832";
const app = express()
app.get('/5832', handler5832)
app.listen(3000, () => {})
        