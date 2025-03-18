
const express = require('express')
import {handler6540} from "./handler6540";
const app = express()
app.get('/6540', handler6540)
app.listen(3000, () => {})
        