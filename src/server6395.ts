
const express = require('express')
import {handler6395} from "./handler6395";
const app = express()
app.get('/6395', handler6395)
app.listen(3000, () => {})
        