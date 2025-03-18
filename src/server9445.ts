
const express = require('express')
import {handler9445} from "./handler9445";
const app = express()
app.get('/9445', handler9445)
app.listen(3000, () => {})
        