
const express = require('express')
import {handler5869} from "./handler5869";
const app = express()
app.get('/5869', handler5869)
app.listen(3000, () => {})
        