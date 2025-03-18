
const express = require('express')
import {handler388} from "./handler388";
const app = express()
app.get('/388', handler388)
app.listen(3000, () => {})
        