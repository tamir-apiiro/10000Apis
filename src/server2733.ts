
const express = require('express')
import {handler2733} from "./handler2733";
const app = express()
app.get('/2733', handler2733)
app.listen(3000, () => {})
        