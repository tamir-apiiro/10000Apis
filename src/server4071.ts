
const express = require('express')
import {handler4071} from "./handler4071";
const app = express()
app.get('/4071', handler4071)
app.listen(3000, () => {})
        