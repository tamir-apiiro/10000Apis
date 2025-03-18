
const express = require('express')
import {handler5404} from "./handler5404";
const app = express()
app.get('/5404', handler5404)
app.listen(3000, () => {})
        