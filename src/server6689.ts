
const express = require('express')
import {handler6689} from "./handler6689";
const app = express()
app.get('/6689', handler6689)
app.listen(3000, () => {})
        