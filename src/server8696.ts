
const express = require('express')
import {handler8696} from "./handler8696";
const app = express()
app.get('/8696', handler8696)
app.listen(3000, () => {})
        