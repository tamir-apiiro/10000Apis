
const express = require('express')
import {handler4700} from "./handler4700";
const app = express()
app.get('/4700', handler4700)
app.listen(3000, () => {})
        