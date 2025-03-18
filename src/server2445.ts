
const express = require('express')
import {handler2445} from "./handler2445";
const app = express()
app.get('/2445', handler2445)
app.listen(3000, () => {})
        