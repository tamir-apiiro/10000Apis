
const express = require('express')
import {handler7287} from "./handler7287";
const app = express()
app.get('/7287', handler7287)
app.listen(3000, () => {})
        