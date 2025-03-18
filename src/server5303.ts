
const express = require('express')
import {handler5303} from "./handler5303";
const app = express()
app.get('/5303', handler5303)
app.listen(3000, () => {})
        