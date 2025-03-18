
const express = require('express')
import {handler7725} from "./handler7725";
const app = express()
app.get('/7725', handler7725)
app.listen(3000, () => {})
        