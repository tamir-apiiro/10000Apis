
const express = require('express')
import {handler2682} from "./handler2682";
const app = express()
app.get('/2682', handler2682)
app.listen(3000, () => {})
        