
const express = require('express')
import {handler5538} from "./handler5538";
const app = express()
app.get('/5538', handler5538)
app.listen(3000, () => {})
        