
const express = require('express')
import {handler7245} from "./handler7245";
const app = express()
app.get('/7245', handler7245)
app.listen(3000, () => {})
        