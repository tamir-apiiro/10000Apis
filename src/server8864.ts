
const express = require('express')
import {handler8864} from "./handler8864";
const app = express()
app.get('/8864', handler8864)
app.listen(3000, () => {})
        