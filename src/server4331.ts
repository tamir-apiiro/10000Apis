
const express = require('express')
import {handler4331} from "./handler4331";
const app = express()
app.get('/4331', handler4331)
app.listen(3000, () => {})
        