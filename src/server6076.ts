
const express = require('express')
import {handler6076} from "./handler6076";
const app = express()
app.get('/6076', handler6076)
app.listen(3000, () => {})
        