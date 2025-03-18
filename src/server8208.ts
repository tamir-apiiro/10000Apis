
const express = require('express')
import {handler8208} from "./handler8208";
const app = express()
app.get('/8208', handler8208)
app.listen(3000, () => {})
        