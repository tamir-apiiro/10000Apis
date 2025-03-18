
const express = require('express')
import {handler7873} from "./handler7873";
const app = express()
app.get('/7873', handler7873)
app.listen(3000, () => {})
        