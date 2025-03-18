
const express = require('express')
import {handler445} from "./handler445";
const app = express()
app.get('/445', handler445)
app.listen(3000, () => {})
        