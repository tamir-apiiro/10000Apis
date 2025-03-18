
const express = require('express')
import {handler8460} from "./handler8460";
const app = express()
app.get('/8460', handler8460)
app.listen(3000, () => {})
        