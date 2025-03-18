
const express = require('express')
import {handler7813} from "./handler7813";
const app = express()
app.get('/7813', handler7813)
app.listen(3000, () => {})
        