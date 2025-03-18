
const express = require('express')
import {handler8066} from "./handler8066";
const app = express()
app.get('/8066', handler8066)
app.listen(3000, () => {})
        