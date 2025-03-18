
const express = require('express')
import {handler5724} from "./handler5724";
const app = express()
app.get('/5724', handler5724)
app.listen(3000, () => {})
        