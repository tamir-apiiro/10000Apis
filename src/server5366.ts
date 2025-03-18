
const express = require('express')
import {handler5366} from "./handler5366";
const app = express()
app.get('/5366', handler5366)
app.listen(3000, () => {})
        