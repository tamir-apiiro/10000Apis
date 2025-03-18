
const express = require('express')
import {handler8402} from "./handler8402";
const app = express()
app.get('/8402', handler8402)
app.listen(3000, () => {})
        