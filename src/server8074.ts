
const express = require('express')
import {handler8074} from "./handler8074";
const app = express()
app.get('/8074', handler8074)
app.listen(3000, () => {})
        