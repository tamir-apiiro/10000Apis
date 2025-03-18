
const express = require('express')
import {handler3445} from "./handler3445";
const app = express()
app.get('/3445', handler3445)
app.listen(3000, () => {})
        