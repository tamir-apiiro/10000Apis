
const express = require('express')
import {handler5009} from "./handler5009";
const app = express()
app.get('/5009', handler5009)
app.listen(3000, () => {})
        