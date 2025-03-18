
const express = require('express')
import {handler5441} from "./handler5441";
const app = express()
app.get('/5441', handler5441)
app.listen(3000, () => {})
        