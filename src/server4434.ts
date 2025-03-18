
const express = require('express')
import {handler4434} from "./handler4434";
const app = express()
app.get('/4434', handler4434)
app.listen(3000, () => {})
        