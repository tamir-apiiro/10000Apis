
const express = require('express')
import {handler6028} from "./handler6028";
const app = express()
app.get('/6028', handler6028)
app.listen(3000, () => {})
        