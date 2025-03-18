
const express = require('express')
import {handler8833} from "./handler8833";
const app = express()
app.get('/8833', handler8833)
app.listen(3000, () => {})
        