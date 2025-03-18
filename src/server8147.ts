
const express = require('express')
import {handler8147} from "./handler8147";
const app = express()
app.get('/8147', handler8147)
app.listen(3000, () => {})
        