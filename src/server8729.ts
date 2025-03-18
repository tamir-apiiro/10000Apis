
const express = require('express')
import {handler8729} from "./handler8729";
const app = express()
app.get('/8729', handler8729)
app.listen(3000, () => {})
        