
const express = require('express')
import {handler6412} from "./handler6412";
const app = express()
app.get('/6412', handler6412)
app.listen(3000, () => {})
        