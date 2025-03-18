
const express = require('express')
import {handler8477} from "./handler8477";
const app = express()
app.get('/8477', handler8477)
app.listen(3000, () => {})
        