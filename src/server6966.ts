
const express = require('express')
import {handler6966} from "./handler6966";
const app = express()
app.get('/6966', handler6966)
app.listen(3000, () => {})
        