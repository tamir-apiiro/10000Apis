
const express = require('express')
import {handler6200} from "./handler6200";
const app = express()
app.get('/6200', handler6200)
app.listen(3000, () => {})
        