
const express = require('express')
import {handler4714} from "./handler4714";
const app = express()
app.get('/4714', handler4714)
app.listen(3000, () => {})
        