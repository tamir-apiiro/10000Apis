
const express = require('express')
import {handler8029} from "./handler8029";
const app = express()
app.get('/8029', handler8029)
app.listen(3000, () => {})
        