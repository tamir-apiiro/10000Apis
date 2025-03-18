
const express = require('express')
import {handler8165} from "./handler8165";
const app = express()
app.get('/8165', handler8165)
app.listen(3000, () => {})
        