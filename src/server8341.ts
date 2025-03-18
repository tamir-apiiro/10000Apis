
const express = require('express')
import {handler8341} from "./handler8341";
const app = express()
app.get('/8341', handler8341)
app.listen(3000, () => {})
        