
const express = require('express')
import {handler5633} from "./handler5633";
const app = express()
app.get('/5633', handler5633)
app.listen(3000, () => {})
        