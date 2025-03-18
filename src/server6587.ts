
const express = require('express')
import {handler6587} from "./handler6587";
const app = express()
app.get('/6587', handler6587)
app.listen(3000, () => {})
        