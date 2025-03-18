
const express = require('express')
import {handler7412} from "./handler7412";
const app = express()
app.get('/7412', handler7412)
app.listen(3000, () => {})
        