
const express = require('express')
import {handler7044} from "./handler7044";
const app = express()
app.get('/7044', handler7044)
app.listen(3000, () => {})
        