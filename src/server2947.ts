
const express = require('express')
import {handler2947} from "./handler2947";
const app = express()
app.get('/2947', handler2947)
app.listen(3000, () => {})
        