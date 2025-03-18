
const express = require('express')
import {handler4558} from "./handler4558";
const app = express()
app.get('/4558', handler4558)
app.listen(3000, () => {})
        