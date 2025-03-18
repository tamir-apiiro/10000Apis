
const express = require('express')
import {handler7277} from "./handler7277";
const app = express()
app.get('/7277', handler7277)
app.listen(3000, () => {})
        