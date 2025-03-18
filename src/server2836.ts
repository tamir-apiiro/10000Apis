
const express = require('express')
import {handler2836} from "./handler2836";
const app = express()
app.get('/2836', handler2836)
app.listen(3000, () => {})
        