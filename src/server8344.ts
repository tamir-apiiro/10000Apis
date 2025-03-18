
const express = require('express')
import {handler8344} from "./handler8344";
const app = express()
app.get('/8344', handler8344)
app.listen(3000, () => {})
        