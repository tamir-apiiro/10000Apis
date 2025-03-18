
const express = require('express')
import {handler8881} from "./handler8881";
const app = express()
app.get('/8881', handler8881)
app.listen(3000, () => {})
        