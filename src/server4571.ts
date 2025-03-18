
const express = require('express')
import {handler4571} from "./handler4571";
const app = express()
app.get('/4571', handler4571)
app.listen(3000, () => {})
        