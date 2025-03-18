
const express = require('express')
import {handler6253} from "./handler6253";
const app = express()
app.get('/6253', handler6253)
app.listen(3000, () => {})
        