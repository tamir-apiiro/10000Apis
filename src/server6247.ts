
const express = require('express')
import {handler6247} from "./handler6247";
const app = express()
app.get('/6247', handler6247)
app.listen(3000, () => {})
        