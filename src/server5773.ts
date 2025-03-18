
const express = require('express')
import {handler5773} from "./handler5773";
const app = express()
app.get('/5773', handler5773)
app.listen(3000, () => {})
        