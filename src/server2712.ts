
const express = require('express')
import {handler2712} from "./handler2712";
const app = express()
app.get('/2712', handler2712)
app.listen(3000, () => {})
        