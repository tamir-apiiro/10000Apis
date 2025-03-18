
const express = require('express')
import {handler8312} from "./handler8312";
const app = express()
app.get('/8312', handler8312)
app.listen(3000, () => {})
        