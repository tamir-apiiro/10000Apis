
const express = require('express')
import {handler2239} from "./handler2239";
const app = express()
app.get('/2239', handler2239)
app.listen(3000, () => {})
        