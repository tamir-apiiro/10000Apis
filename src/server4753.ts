
const express = require('express')
import {handler4753} from "./handler4753";
const app = express()
app.get('/4753', handler4753)
app.listen(3000, () => {})
        