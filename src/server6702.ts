
const express = require('express')
import {handler6702} from "./handler6702";
const app = express()
app.get('/6702', handler6702)
app.listen(3000, () => {})
        