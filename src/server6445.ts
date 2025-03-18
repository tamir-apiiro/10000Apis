
const express = require('express')
import {handler6445} from "./handler6445";
const app = express()
app.get('/6445', handler6445)
app.listen(3000, () => {})
        