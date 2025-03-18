
const express = require('express')
import {handler6515} from "./handler6515";
const app = express()
app.get('/6515', handler6515)
app.listen(3000, () => {})
        