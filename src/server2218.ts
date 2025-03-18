
const express = require('express')
import {handler2218} from "./handler2218";
const app = express()
app.get('/2218', handler2218)
app.listen(3000, () => {})
        