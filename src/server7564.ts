
const express = require('express')
import {handler7564} from "./handler7564";
const app = express()
app.get('/7564', handler7564)
app.listen(3000, () => {})
        