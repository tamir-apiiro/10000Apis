
const express = require('express')
import {handler4322} from "./handler4322";
const app = express()
app.get('/4322', handler4322)
app.listen(3000, () => {})
        