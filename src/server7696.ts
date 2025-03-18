
const express = require('express')
import {handler7696} from "./handler7696";
const app = express()
app.get('/7696', handler7696)
app.listen(3000, () => {})
        