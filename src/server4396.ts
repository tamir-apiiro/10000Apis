
const express = require('express')
import {handler4396} from "./handler4396";
const app = express()
app.get('/4396', handler4396)
app.listen(3000, () => {})
        