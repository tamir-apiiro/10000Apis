
const express = require('express')
import {handler4011} from "./handler4011";
const app = express()
app.get('/4011', handler4011)
app.listen(3000, () => {})
        