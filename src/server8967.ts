
const express = require('express')
import {handler8967} from "./handler8967";
const app = express()
app.get('/8967', handler8967)
app.listen(3000, () => {})
        