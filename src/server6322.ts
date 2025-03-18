
const express = require('express')
import {handler6322} from "./handler6322";
const app = express()
app.get('/6322', handler6322)
app.listen(3000, () => {})
        