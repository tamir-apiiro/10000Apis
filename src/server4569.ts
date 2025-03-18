
const express = require('express')
import {handler4569} from "./handler4569";
const app = express()
app.get('/4569', handler4569)
app.listen(3000, () => {})
        