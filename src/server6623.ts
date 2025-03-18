
const express = require('express')
import {handler6623} from "./handler6623";
const app = express()
app.get('/6623', handler6623)
app.listen(3000, () => {})
        