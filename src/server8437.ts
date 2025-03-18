
const express = require('express')
import {handler8437} from "./handler8437";
const app = express()
app.get('/8437', handler8437)
app.listen(3000, () => {})
        