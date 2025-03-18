
const express = require('express')
import {handler8445} from "./handler8445";
const app = express()
app.get('/8445', handler8445)
app.listen(3000, () => {})
        