
const express = require('express')
import {handler2564} from "./handler2564";
const app = express()
app.get('/2564', handler2564)
app.listen(3000, () => {})
        