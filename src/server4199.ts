
const express = require('express')
import {handler4199} from "./handler4199";
const app = express()
app.get('/4199', handler4199)
app.listen(3000, () => {})
        