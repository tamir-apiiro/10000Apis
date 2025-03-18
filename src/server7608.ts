
const express = require('express')
import {handler7608} from "./handler7608";
const app = express()
app.get('/7608', handler7608)
app.listen(3000, () => {})
        