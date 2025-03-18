
const express = require('express')
import {handler5717} from "./handler5717";
const app = express()
app.get('/5717', handler5717)
app.listen(3000, () => {})
        