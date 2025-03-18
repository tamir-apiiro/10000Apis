
const express = require('express')
import {handler8964} from "./handler8964";
const app = express()
app.get('/8964', handler8964)
app.listen(3000, () => {})
        