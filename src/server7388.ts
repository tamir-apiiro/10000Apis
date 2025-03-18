
const express = require('express')
import {handler7388} from "./handler7388";
const app = express()
app.get('/7388', handler7388)
app.listen(3000, () => {})
        