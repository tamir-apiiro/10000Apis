
const express = require('express')
import {handler6458} from "./handler6458";
const app = express()
app.get('/6458', handler6458)
app.listen(3000, () => {})
        