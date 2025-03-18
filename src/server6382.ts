
const express = require('express')
import {handler6382} from "./handler6382";
const app = express()
app.get('/6382', handler6382)
app.listen(3000, () => {})
        