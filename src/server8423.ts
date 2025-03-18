
const express = require('express')
import {handler8423} from "./handler8423";
const app = express()
app.get('/8423', handler8423)
app.listen(3000, () => {})
        