
const express = require('express')
import {handler6550} from "./handler6550";
const app = express()
app.get('/6550', handler6550)
app.listen(3000, () => {})
        