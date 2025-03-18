
const express = require('express')
import {handler8284} from "./handler8284";
const app = express()
app.get('/8284', handler8284)
app.listen(3000, () => {})
        