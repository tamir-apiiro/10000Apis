
const express = require('express')
import {handler6142} from "./handler6142";
const app = express()
app.get('/6142', handler6142)
app.listen(3000, () => {})
        