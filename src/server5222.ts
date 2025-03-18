
const express = require('express')
import {handler5222} from "./handler5222";
const app = express()
app.get('/5222', handler5222)
app.listen(3000, () => {})
        