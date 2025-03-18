
const express = require('express')
import {handler5145} from "./handler5145";
const app = express()
app.get('/5145', handler5145)
app.listen(3000, () => {})
        