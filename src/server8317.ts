
const express = require('express')
import {handler8317} from "./handler8317";
const app = express()
app.get('/8317', handler8317)
app.listen(3000, () => {})
        