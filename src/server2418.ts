
const express = require('express')
import {handler2418} from "./handler2418";
const app = express()
app.get('/2418', handler2418)
app.listen(3000, () => {})
        