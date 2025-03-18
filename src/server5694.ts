
const express = require('express')
import {handler5694} from "./handler5694";
const app = express()
app.get('/5694', handler5694)
app.listen(3000, () => {})
        