
const express = require('express')
import {handler4733} from "./handler4733";
const app = express()
app.get('/4733', handler4733)
app.listen(3000, () => {})
        