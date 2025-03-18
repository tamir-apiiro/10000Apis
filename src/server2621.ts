
const express = require('express')
import {handler2621} from "./handler2621";
const app = express()
app.get('/2621', handler2621)
app.listen(3000, () => {})
        