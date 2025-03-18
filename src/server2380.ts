
const express = require('express')
import {handler2380} from "./handler2380";
const app = express()
app.get('/2380', handler2380)
app.listen(3000, () => {})
        