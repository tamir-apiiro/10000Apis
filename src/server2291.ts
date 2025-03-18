
const express = require('express')
import {handler2291} from "./handler2291";
const app = express()
app.get('/2291', handler2291)
app.listen(3000, () => {})
        