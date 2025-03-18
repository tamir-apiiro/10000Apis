
const express = require('express')
import {handler4752} from "./handler4752";
const app = express()
app.get('/4752', handler4752)
app.listen(3000, () => {})
        