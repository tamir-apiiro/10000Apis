
const express = require('express')
import {handler4291} from "./handler4291";
const app = express()
app.get('/4291', handler4291)
app.listen(3000, () => {})
        