
const express = require('express')
import {handler8559} from "./handler8559";
const app = express()
app.get('/8559', handler8559)
app.listen(3000, () => {})
        