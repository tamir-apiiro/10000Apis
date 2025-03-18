
const express = require('express')
import {handler412} from "./handler412";
const app = express()
app.get('/412', handler412)
app.listen(3000, () => {})
        