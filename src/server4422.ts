
const express = require('express')
import {handler4422} from "./handler4422";
const app = express()
app.get('/4422', handler4422)
app.listen(3000, () => {})
        