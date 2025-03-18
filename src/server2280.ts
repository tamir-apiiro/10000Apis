
const express = require('express')
import {handler2280} from "./handler2280";
const app = express()
app.get('/2280', handler2280)
app.listen(3000, () => {})
        