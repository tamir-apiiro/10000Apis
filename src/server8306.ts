
const express = require('express')
import {handler8306} from "./handler8306";
const app = express()
app.get('/8306', handler8306)
app.listen(3000, () => {})
        