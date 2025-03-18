
const express = require('express')
import {handler4321} from "./handler4321";
const app = express()
app.get('/4321', handler4321)
app.listen(3000, () => {})
        