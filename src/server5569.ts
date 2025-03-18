
const express = require('express')
import {handler5569} from "./handler5569";
const app = express()
app.get('/5569', handler5569)
app.listen(3000, () => {})
        