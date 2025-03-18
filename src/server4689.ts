
const express = require('express')
import {handler4689} from "./handler4689";
const app = express()
app.get('/4689', handler4689)
app.listen(3000, () => {})
        