
const express = require('express')
import {handler8430} from "./handler8430";
const app = express()
app.get('/8430', handler8430)
app.listen(3000, () => {})
        