
const express = require('express')
import {handler6157} from "./handler6157";
const app = express()
app.get('/6157', handler6157)
app.listen(3000, () => {})
        