
const express = require('express')
import {handler2632} from "./handler2632";
const app = express()
app.get('/2632', handler2632)
app.listen(3000, () => {})
        