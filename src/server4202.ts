
const express = require('express')
import {handler4202} from "./handler4202";
const app = express()
app.get('/4202', handler4202)
app.listen(3000, () => {})
        