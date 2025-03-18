
const express = require('express')
import {handler6627} from "./handler6627";
const app = express()
app.get('/6627', handler6627)
app.listen(3000, () => {})
        