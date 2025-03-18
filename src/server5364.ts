
const express = require('express')
import {handler5364} from "./handler5364";
const app = express()
app.get('/5364', handler5364)
app.listen(3000, () => {})
        