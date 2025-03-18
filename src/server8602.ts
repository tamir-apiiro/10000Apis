
const express = require('express')
import {handler8602} from "./handler8602";
const app = express()
app.get('/8602', handler8602)
app.listen(3000, () => {})
        