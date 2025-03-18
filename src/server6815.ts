
const express = require('express')
import {handler6815} from "./handler6815";
const app = express()
app.get('/6815', handler6815)
app.listen(3000, () => {})
        