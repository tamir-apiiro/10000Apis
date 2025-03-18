
const express = require('express')
import {handler8168} from "./handler8168";
const app = express()
app.get('/8168', handler8168)
app.listen(3000, () => {})
        