
const express = require('express')
import {handler5223} from "./handler5223";
const app = express()
app.get('/5223', handler5223)
app.listen(3000, () => {})
        