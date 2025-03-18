
const express = require('express')
import {handler5467} from "./handler5467";
const app = express()
app.get('/5467', handler5467)
app.listen(3000, () => {})
        