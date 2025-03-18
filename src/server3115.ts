
const express = require('express')
import {handler3115} from "./handler3115";
const app = express()
app.get('/3115', handler3115)
app.listen(3000, () => {})
        