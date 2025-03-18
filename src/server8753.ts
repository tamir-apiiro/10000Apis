
const express = require('express')
import {handler8753} from "./handler8753";
const app = express()
app.get('/8753', handler8753)
app.listen(3000, () => {})
        