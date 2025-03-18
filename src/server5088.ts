
const express = require('express')
import {handler5088} from "./handler5088";
const app = express()
app.get('/5088', handler5088)
app.listen(3000, () => {})
        