
const express = require('express')
import {handler4106} from "./handler4106";
const app = express()
app.get('/4106', handler4106)
app.listen(3000, () => {})
        