
const express = require('express')
import {handler4408} from "./handler4408";
const app = express()
app.get('/4408', handler4408)
app.listen(3000, () => {})
        