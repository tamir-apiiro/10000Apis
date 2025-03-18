
const express = require('express')
import {handler6724} from "./handler6724";
const app = express()
app.get('/6724', handler6724)
app.listen(3000, () => {})
        