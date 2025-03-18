
const express = require('express')
import {handler277} from "./handler277";
const app = express()
app.get('/277', handler277)
app.listen(3000, () => {})
        