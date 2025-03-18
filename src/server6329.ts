
const express = require('express')
import {handler6329} from "./handler6329";
const app = express()
app.get('/6329', handler6329)
app.listen(3000, () => {})
        