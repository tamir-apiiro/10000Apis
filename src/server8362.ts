
const express = require('express')
import {handler8362} from "./handler8362";
const app = express()
app.get('/8362', handler8362)
app.listen(3000, () => {})
        