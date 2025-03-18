
const express = require('express')
import {handler8798} from "./handler8798";
const app = express()
app.get('/8798', handler8798)
app.listen(3000, () => {})
        