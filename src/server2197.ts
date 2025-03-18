
const express = require('express')
import {handler2197} from "./handler2197";
const app = express()
app.get('/2197', handler2197)
app.listen(3000, () => {})
        