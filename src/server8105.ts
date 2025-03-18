
const express = require('express')
import {handler8105} from "./handler8105";
const app = express()
app.get('/8105', handler8105)
app.listen(3000, () => {})
        