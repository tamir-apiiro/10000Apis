
const express = require('express')
import {handler4445} from "./handler4445";
const app = express()
app.get('/4445', handler4445)
app.listen(3000, () => {})
        