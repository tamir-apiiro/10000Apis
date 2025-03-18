
const express = require('express')
import {handler6309} from "./handler6309";
const app = express()
app.get('/6309', handler6309)
app.listen(3000, () => {})
        