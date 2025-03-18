
const express = require('express')
import {handler5457} from "./handler5457";
const app = express()
app.get('/5457', handler5457)
app.listen(3000, () => {})
        