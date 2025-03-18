
const express = require('express')
import {handler309} from "./handler309";
const app = express()
app.get('/309', handler309)
app.listen(3000, () => {})
        