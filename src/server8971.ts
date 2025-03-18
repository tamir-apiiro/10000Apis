
const express = require('express')
import {handler8971} from "./handler8971";
const app = express()
app.get('/8971', handler8971)
app.listen(3000, () => {})
        