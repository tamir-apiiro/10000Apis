
const express = require('express')
import {handler5526} from "./handler5526";
const app = express()
app.get('/5526', handler5526)
app.listen(3000, () => {})
        