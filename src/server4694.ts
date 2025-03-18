
const express = require('express')
import {handler4694} from "./handler4694";
const app = express()
app.get('/4694', handler4694)
app.listen(3000, () => {})
        