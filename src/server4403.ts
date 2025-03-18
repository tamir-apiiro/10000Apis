
const express = require('express')
import {handler4403} from "./handler4403";
const app = express()
app.get('/4403', handler4403)
app.listen(3000, () => {})
        