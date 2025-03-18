
const express = require('express')
import {handler6645} from "./handler6645";
const app = express()
app.get('/6645', handler6645)
app.listen(3000, () => {})
        