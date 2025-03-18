
const express = require('express')
import {handler3733} from "./handler3733";
const app = express()
app.get('/3733', handler3733)
app.listen(3000, () => {})
        