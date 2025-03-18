
const express = require('express')
import {handler966} from "./handler966";
const app = express()
app.get('/966', handler966)
app.listen(3000, () => {})
        