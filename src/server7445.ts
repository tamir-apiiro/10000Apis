
const express = require('express')
import {handler7445} from "./handler7445";
const app = express()
app.get('/7445', handler7445)
app.listen(3000, () => {})
        