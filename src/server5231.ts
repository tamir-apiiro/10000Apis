
const express = require('express')
import {handler5231} from "./handler5231";
const app = express()
app.get('/5231', handler5231)
app.listen(3000, () => {})
        