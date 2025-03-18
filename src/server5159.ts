
const express = require('express')
import {handler5159} from "./handler5159";
const app = express()
app.get('/5159', handler5159)
app.listen(3000, () => {})
        