
const express = require('express')
import {handler4505} from "./handler4505";
const app = express()
app.get('/4505', handler4505)
app.listen(3000, () => {})
        