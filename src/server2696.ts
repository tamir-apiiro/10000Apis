
const express = require('express')
import {handler2696} from "./handler2696";
const app = express()
app.get('/2696', handler2696)
app.listen(3000, () => {})
        