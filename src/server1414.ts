
const express = require('express')
import {handler1414} from "./handler1414";
const app = express()
app.get('/1414', handler1414)
app.listen(3000, () => {})
        