
const express = require('express')
import {handler4567} from "./handler4567";
const app = express()
app.get('/4567', handler4567)
app.listen(3000, () => {})
        