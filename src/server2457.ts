
const express = require('express')
import {handler2457} from "./handler2457";
const app = express()
app.get('/2457', handler2457)
app.listen(3000, () => {})
        