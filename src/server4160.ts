
const express = require('express')
import {handler4160} from "./handler4160";
const app = express()
app.get('/4160', handler4160)
app.listen(3000, () => {})
        