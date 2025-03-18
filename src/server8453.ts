
const express = require('express')
import {handler8453} from "./handler8453";
const app = express()
app.get('/8453', handler8453)
app.listen(3000, () => {})
        