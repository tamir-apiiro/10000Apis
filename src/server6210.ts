
const express = require('express')
import {handler6210} from "./handler6210";
const app = express()
app.get('/6210', handler6210)
app.listen(3000, () => {})
        