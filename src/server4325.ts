
const express = require('express')
import {handler4325} from "./handler4325";
const app = express()
app.get('/4325', handler4325)
app.listen(3000, () => {})
        