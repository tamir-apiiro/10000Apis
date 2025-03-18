
const express = require('express')
import {handler4123} from "./handler4123";
const app = express()
app.get('/4123', handler4123)
app.listen(3000, () => {})
        