
const express = require('express')
import {handler2422} from "./handler2422";
const app = express()
app.get('/2422', handler2422)
app.listen(3000, () => {})
        