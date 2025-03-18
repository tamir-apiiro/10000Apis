
const express = require('express')
import {handler535} from "./handler535";
const app = express()
app.get('/535', handler535)
app.listen(3000, () => {})
        