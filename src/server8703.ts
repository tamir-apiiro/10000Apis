
const express = require('express')
import {handler8703} from "./handler8703";
const app = express()
app.get('/8703', handler8703)
app.listen(3000, () => {})
        