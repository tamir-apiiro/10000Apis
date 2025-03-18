
const express = require('express')
import {handler2003} from "./handler2003";
const app = express()
app.get('/2003', handler2003)
app.listen(3000, () => {})
        