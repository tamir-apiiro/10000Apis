
const express = require('express')
import {handler6726} from "./handler6726";
const app = express()
app.get('/6726', handler6726)
app.listen(3000, () => {})
        