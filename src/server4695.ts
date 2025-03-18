
const express = require('express')
import {handler4695} from "./handler4695";
const app = express()
app.get('/4695', handler4695)
app.listen(3000, () => {})
        