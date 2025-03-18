
const express = require('express')
import {handler5553} from "./handler5553";
const app = express()
app.get('/5553', handler5553)
app.listen(3000, () => {})
        