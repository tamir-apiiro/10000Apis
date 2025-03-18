
const express = require('express')
import {handler8114} from "./handler8114";
const app = express()
app.get('/8114', handler8114)
app.listen(3000, () => {})
        