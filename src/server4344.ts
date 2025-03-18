
const express = require('express')
import {handler4344} from "./handler4344";
const app = express()
app.get('/4344', handler4344)
app.listen(3000, () => {})
        