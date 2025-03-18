
const express = require('express')
import {handler2116} from "./handler2116";
const app = express()
app.get('/2116', handler2116)
app.listen(3000, () => {})
        