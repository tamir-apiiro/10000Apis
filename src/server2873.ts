
const express = require('express')
import {handler2873} from "./handler2873";
const app = express()
app.get('/2873', handler2873)
app.listen(3000, () => {})
        