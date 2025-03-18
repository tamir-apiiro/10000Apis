
const express = require('express')
import {handler6242} from "./handler6242";
const app = express()
app.get('/6242', handler6242)
app.listen(3000, () => {})
        