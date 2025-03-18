
const express = require('express')
import {handler5783} from "./handler5783";
const app = express()
app.get('/5783', handler5783)
app.listen(3000, () => {})
        