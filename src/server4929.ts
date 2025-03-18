
const express = require('express')
import {handler4929} from "./handler4929";
const app = express()
app.get('/4929', handler4929)
app.listen(3000, () => {})
        