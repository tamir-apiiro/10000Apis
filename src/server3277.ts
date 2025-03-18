
const express = require('express')
import {handler3277} from "./handler3277";
const app = express()
app.get('/3277', handler3277)
app.listen(3000, () => {})
        