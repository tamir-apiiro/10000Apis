
const express = require('express')
import {handler8565} from "./handler8565";
const app = express()
app.get('/8565', handler8565)
app.listen(3000, () => {})
        