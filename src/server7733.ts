
const express = require('express')
import {handler7733} from "./handler7733";
const app = express()
app.get('/7733', handler7733)
app.listen(3000, () => {})
        