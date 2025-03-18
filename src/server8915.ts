
const express = require('express')
import {handler8915} from "./handler8915";
const app = express()
app.get('/8915', handler8915)
app.listen(3000, () => {})
        