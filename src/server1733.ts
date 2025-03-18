
const express = require('express')
import {handler1733} from "./handler1733";
const app = express()
app.get('/1733', handler1733)
app.listen(3000, () => {})
        