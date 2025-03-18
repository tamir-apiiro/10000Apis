
const express = require('express')
import {handler8518} from "./handler8518";
const app = express()
app.get('/8518', handler8518)
app.listen(3000, () => {})
        