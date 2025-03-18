
const express = require('express')
import {handler4504} from "./handler4504";
const app = express()
app.get('/4504', handler4504)
app.listen(3000, () => {})
        