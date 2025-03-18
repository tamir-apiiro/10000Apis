
const express = require('express')
import {handler8653} from "./handler8653";
const app = express()
app.get('/8653', handler8653)
app.listen(3000, () => {})
        