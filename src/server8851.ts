
const express = require('express')
import {handler8851} from "./handler8851";
const app = express()
app.get('/8851', handler8851)
app.listen(3000, () => {})
        