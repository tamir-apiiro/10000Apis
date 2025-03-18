
const express = require('express')
import {handler2428} from "./handler2428";
const app = express()
app.get('/2428', handler2428)
app.listen(3000, () => {})
        