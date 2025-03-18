
const express = require('express')
import {handler4888} from "./handler4888";
const app = express()
app.get('/4888', handler4888)
app.listen(3000, () => {})
        