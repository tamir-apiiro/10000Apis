
const express = require('express')
import {handler6828} from "./handler6828";
const app = express()
app.get('/6828', handler6828)
app.listen(3000, () => {})
        