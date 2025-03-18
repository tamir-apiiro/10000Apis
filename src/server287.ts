
const express = require('express')
import {handler287} from "./handler287";
const app = express()
app.get('/287', handler287)
app.listen(3000, () => {})
        