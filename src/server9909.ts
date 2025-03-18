
const express = require('express')
import {handler9909} from "./handler9909";
const app = express()
app.get('/9909', handler9909)
app.listen(3000, () => {})
        