
const express = require('express')
import {handler733} from "./handler733";
const app = express()
app.get('/733', handler733)
app.listen(3000, () => {})
        