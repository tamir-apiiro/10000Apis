
const express = require('express')
import {handler2831} from "./handler2831";
const app = express()
app.get('/2831', handler2831)
app.listen(3000, () => {})
        