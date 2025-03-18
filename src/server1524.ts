
const express = require('express')
import {handler1524} from "./handler1524";
const app = express()
app.get('/1524', handler1524)
app.listen(3000, () => {})
        