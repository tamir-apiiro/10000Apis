
const express = require('express')
import {handler5420} from "./handler5420";
const app = express()
app.get('/5420', handler5420)
app.listen(3000, () => {})
        