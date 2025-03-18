
const express = require('express')
import {handler2207} from "./handler2207";
const app = express()
app.get('/2207', handler2207)
app.listen(3000, () => {})
        