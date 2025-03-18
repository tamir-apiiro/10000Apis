
const express = require('express')
import {handler2717} from "./handler2717";
const app = express()
app.get('/2717', handler2717)
app.listen(3000, () => {})
        