
const express = require('express')
import {handler5476} from "./handler5476";
const app = express()
app.get('/5476', handler5476)
app.listen(3000, () => {})
        