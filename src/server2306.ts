
const express = require('express')
import {handler2306} from "./handler2306";
const app = express()
app.get('/2306', handler2306)
app.listen(3000, () => {})
        