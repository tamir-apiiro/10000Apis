
const express = require('express')
import {handler4049} from "./handler4049";
const app = express()
app.get('/4049', handler4049)
app.listen(3000, () => {})
        