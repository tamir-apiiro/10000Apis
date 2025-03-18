
const express = require('express')
import {handler2088} from "./handler2088";
const app = express()
app.get('/2088', handler2088)
app.listen(3000, () => {})
        