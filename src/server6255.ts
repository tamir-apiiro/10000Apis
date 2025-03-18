
const express = require('express')
import {handler6255} from "./handler6255";
const app = express()
app.get('/6255', handler6255)
app.listen(3000, () => {})
        