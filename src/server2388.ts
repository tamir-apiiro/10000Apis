
const express = require('express')
import {handler2388} from "./handler2388";
const app = express()
app.get('/2388', handler2388)
app.listen(3000, () => {})
        