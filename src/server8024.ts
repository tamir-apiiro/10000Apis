
const express = require('express')
import {handler8024} from "./handler8024";
const app = express()
app.get('/8024', handler8024)
app.listen(3000, () => {})
        