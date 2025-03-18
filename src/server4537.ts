
const express = require('express')
import {handler4537} from "./handler4537";
const app = express()
app.get('/4537', handler4537)
app.listen(3000, () => {})
        