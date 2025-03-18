
const express = require('express')
import {handler5964} from "./handler5964";
const app = express()
app.get('/5964', handler5964)
app.listen(3000, () => {})
        