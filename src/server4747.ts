
const express = require('express')
import {handler4747} from "./handler4747";
const app = express()
app.get('/4747', handler4747)
app.listen(3000, () => {})
        