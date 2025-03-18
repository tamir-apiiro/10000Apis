
const express = require('express')
import {handler6086} from "./handler6086";
const app = express()
app.get('/6086', handler6086)
app.listen(3000, () => {})
        