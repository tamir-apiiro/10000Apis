
const express = require('express')
import {handler6179} from "./handler6179";
const app = express()
app.get('/6179', handler6179)
app.listen(3000, () => {})
        