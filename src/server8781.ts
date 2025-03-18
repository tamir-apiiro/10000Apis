
const express = require('express')
import {handler8781} from "./handler8781";
const app = express()
app.get('/8781', handler8781)
app.listen(3000, () => {})
        