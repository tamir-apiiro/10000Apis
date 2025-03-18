
const express = require('express')
import {handler8936} from "./handler8936";
const app = express()
app.get('/8936', handler8936)
app.listen(3000, () => {})
        