
const express = require('express')
import {handler4378} from "./handler4378";
const app = express()
app.get('/4378', handler4378)
app.listen(3000, () => {})
        