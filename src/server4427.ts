
const express = require('express')
import {handler4427} from "./handler4427";
const app = express()
app.get('/4427', handler4427)
app.listen(3000, () => {})
        