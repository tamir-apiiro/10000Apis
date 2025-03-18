
const express = require('express')
import {handler8666} from "./handler8666";
const app = express()
app.get('/8666', handler8666)
app.listen(3000, () => {})
        