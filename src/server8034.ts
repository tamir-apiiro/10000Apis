
const express = require('express')
import {handler8034} from "./handler8034";
const app = express()
app.get('/8034', handler8034)
app.listen(3000, () => {})
        