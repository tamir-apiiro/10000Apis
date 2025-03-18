
const express = require('express')
import {handler2884} from "./handler2884";
const app = express()
app.get('/2884', handler2884)
app.listen(3000, () => {})
        