
const express = require('express')
import {handler5502} from "./handler5502";
const app = express()
app.get('/5502', handler5502)
app.listen(3000, () => {})
        