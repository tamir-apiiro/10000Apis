
const express = require('express')
import {handler8884} from "./handler8884";
const app = express()
app.get('/8884', handler8884)
app.listen(3000, () => {})
        