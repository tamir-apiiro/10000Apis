
const express = require('express')
import {handler5921} from "./handler5921";
const app = express()
app.get('/5921', handler5921)
app.listen(3000, () => {})
        