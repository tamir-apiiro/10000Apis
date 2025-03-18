
const express = require('express')
import {handler6741} from "./handler6741";
const app = express()
app.get('/6741', handler6741)
app.listen(3000, () => {})
        