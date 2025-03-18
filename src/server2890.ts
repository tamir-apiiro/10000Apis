
const express = require('express')
import {handler2890} from "./handler2890";
const app = express()
app.get('/2890', handler2890)
app.listen(3000, () => {})
        