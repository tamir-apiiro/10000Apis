
const express = require('express')
import {handler5846} from "./handler5846";
const app = express()
app.get('/5846', handler5846)
app.listen(3000, () => {})
        