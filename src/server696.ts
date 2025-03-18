
const express = require('express')
import {handler696} from "./handler696";
const app = express()
app.get('/696', handler696)
app.listen(3000, () => {})
        