
const express = require('express')
import {handler4025} from "./handler4025";
const app = express()
app.get('/4025', handler4025)
app.listen(3000, () => {})
        