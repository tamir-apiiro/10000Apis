
const express = require('express')
import {handler5327} from "./handler5327";
const app = express()
app.get('/5327', handler5327)
app.listen(3000, () => {})
        