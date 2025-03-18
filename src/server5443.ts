
const express = require('express')
import {handler5443} from "./handler5443";
const app = express()
app.get('/5443', handler5443)
app.listen(3000, () => {})
        