
const express = require('express')
import {handler8328} from "./handler8328";
const app = express()
app.get('/8328', handler8328)
app.listen(3000, () => {})
        