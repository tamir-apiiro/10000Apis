
const express = require('express')
import {handler5008} from "./handler5008";
const app = express()
app.get('/5008', handler5008)
app.listen(3000, () => {})
        