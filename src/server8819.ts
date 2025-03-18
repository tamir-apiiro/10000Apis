
const express = require('express')
import {handler8819} from "./handler8819";
const app = express()
app.get('/8819', handler8819)
app.listen(3000, () => {})
        