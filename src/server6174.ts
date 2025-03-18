
const express = require('express')
import {handler6174} from "./handler6174";
const app = express()
app.get('/6174', handler6174)
app.listen(3000, () => {})
        