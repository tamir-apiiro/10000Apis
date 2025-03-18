
const express = require('express')
import {handler2593} from "./handler2593";
const app = express()
app.get('/2593', handler2593)
app.listen(3000, () => {})
        