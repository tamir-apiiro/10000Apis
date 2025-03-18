
const express = require('express')
import {handler4007} from "./handler4007";
const app = express()
app.get('/4007', handler4007)
app.listen(3000, () => {})
        