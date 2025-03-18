
const express = require('express')
import {handler6721} from "./handler6721";
const app = express()
app.get('/6721', handler6721)
app.listen(3000, () => {})
        