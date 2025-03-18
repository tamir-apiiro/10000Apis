
const express = require('express')
import {handler1412} from "./handler1412";
const app = express()
app.get('/1412', handler1412)
app.listen(3000, () => {})
        