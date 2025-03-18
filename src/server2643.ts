
const express = require('express')
import {handler2643} from "./handler2643";
const app = express()
app.get('/2643', handler2643)
app.listen(3000, () => {})
        