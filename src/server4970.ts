
const express = require('express')
import {handler4970} from "./handler4970";
const app = express()
app.get('/4970', handler4970)
app.listen(3000, () => {})
        