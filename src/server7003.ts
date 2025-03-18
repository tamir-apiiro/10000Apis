
const express = require('express')
import {handler7003} from "./handler7003";
const app = express()
app.get('/7003', handler7003)
app.listen(3000, () => {})
        