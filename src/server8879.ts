
const express = require('express')
import {handler8879} from "./handler8879";
const app = express()
app.get('/8879', handler8879)
app.listen(3000, () => {})
        