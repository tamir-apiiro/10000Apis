
const express = require('express')
import {handler4311} from "./handler4311";
const app = express()
app.get('/4311', handler4311)
app.listen(3000, () => {})
        