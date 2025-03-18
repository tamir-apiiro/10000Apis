
const express = require('express')
import {handler4621} from "./handler4621";
const app = express()
app.get('/4621', handler4621)
app.listen(3000, () => {})
        