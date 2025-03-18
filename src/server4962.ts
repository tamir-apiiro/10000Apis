
const express = require('express')
import {handler4962} from "./handler4962";
const app = express()
app.get('/4962', handler4962)
app.listen(3000, () => {})
        