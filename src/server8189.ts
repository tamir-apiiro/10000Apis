
const express = require('express')
import {handler8189} from "./handler8189";
const app = express()
app.get('/8189', handler8189)
app.listen(3000, () => {})
        