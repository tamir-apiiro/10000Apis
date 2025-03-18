
const express = require('express')
import {handler5458} from "./handler5458";
const app = express()
app.get('/5458', handler5458)
app.listen(3000, () => {})
        