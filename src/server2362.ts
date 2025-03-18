
const express = require('express')
import {handler2362} from "./handler2362";
const app = express()
app.get('/2362', handler2362)
app.listen(3000, () => {})
        