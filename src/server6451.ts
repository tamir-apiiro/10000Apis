
const express = require('express')
import {handler6451} from "./handler6451";
const app = express()
app.get('/6451', handler6451)
app.listen(3000, () => {})
        