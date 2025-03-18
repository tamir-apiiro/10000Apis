
const express = require('express')
import {handler6979} from "./handler6979";
const app = express()
app.get('/6979', handler6979)
app.listen(3000, () => {})
        