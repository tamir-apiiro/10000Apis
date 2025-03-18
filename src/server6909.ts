
const express = require('express')
import {handler6909} from "./handler6909";
const app = express()
app.get('/6909', handler6909)
app.listen(3000, () => {})
        