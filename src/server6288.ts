
const express = require('express')
import {handler6288} from "./handler6288";
const app = express()
app.get('/6288', handler6288)
app.listen(3000, () => {})
        