
const express = require('express')
import {handler6002} from "./handler6002";
const app = express()
app.get('/6002', handler6002)
app.listen(3000, () => {})
        