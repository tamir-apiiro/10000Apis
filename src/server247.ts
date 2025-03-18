
const express = require('express')
import {handler247} from "./handler247";
const app = express()
app.get('/247', handler247)
app.listen(3000, () => {})
        