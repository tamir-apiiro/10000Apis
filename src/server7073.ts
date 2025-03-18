
const express = require('express')
import {handler7073} from "./handler7073";
const app = express()
app.get('/7073', handler7073)
app.listen(3000, () => {})
        