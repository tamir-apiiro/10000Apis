
const express = require('express')
import {handler8003} from "./handler8003";
const app = express()
app.get('/8003', handler8003)
app.listen(3000, () => {})
        