
const express = require('express')
import {handler4329} from "./handler4329";
const app = express()
app.get('/4329', handler4329)
app.listen(3000, () => {})
        