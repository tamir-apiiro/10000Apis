
const express = require('express')
import {handler8154} from "./handler8154";
const app = express()
app.get('/8154', handler8154)
app.listen(3000, () => {})
        