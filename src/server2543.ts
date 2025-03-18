
const express = require('express')
import {handler2543} from "./handler2543";
const app = express()
app.get('/2543', handler2543)
app.listen(3000, () => {})
        