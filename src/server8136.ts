
const express = require('express')
import {handler8136} from "./handler8136";
const app = express()
app.get('/8136', handler8136)
app.listen(3000, () => {})
        