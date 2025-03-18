
const express = require('express')
import {handler4872} from "./handler4872";
const app = express()
app.get('/4872', handler4872)
app.listen(3000, () => {})
        