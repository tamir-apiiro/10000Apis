
const express = require('express')
import {handler8893} from "./handler8893";
const app = express()
app.get('/8893', handler8893)
app.listen(3000, () => {})
        