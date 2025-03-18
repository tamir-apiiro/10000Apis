
const express = require('express')
import {handler2277} from "./handler2277";
const app = express()
app.get('/2277', handler2277)
app.listen(3000, () => {})
        