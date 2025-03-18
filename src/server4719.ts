
const express = require('express')
import {handler4719} from "./handler4719";
const app = express()
app.get('/4719', handler4719)
app.listen(3000, () => {})
        