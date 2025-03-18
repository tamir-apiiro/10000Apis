
const express = require('express')
import {handler5547} from "./handler5547";
const app = express()
app.get('/5547', handler5547)
app.listen(3000, () => {})
        