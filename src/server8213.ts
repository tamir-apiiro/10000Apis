
const express = require('express')
import {handler8213} from "./handler8213";
const app = express()
app.get('/8213', handler8213)
app.listen(3000, () => {})
        