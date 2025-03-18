
const express = require('express')
import {handler4749} from "./handler4749";
const app = express()
app.get('/4749', handler4749)
app.listen(3000, () => {})
        