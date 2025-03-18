
const express = require('express')
import {handler4741} from "./handler4741";
const app = express()
app.get('/4741', handler4741)
app.listen(3000, () => {})
        