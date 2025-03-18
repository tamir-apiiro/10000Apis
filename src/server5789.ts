
const express = require('express')
import {handler5789} from "./handler5789";
const app = express()
app.get('/5789', handler5789)
app.listen(3000, () => {})
        