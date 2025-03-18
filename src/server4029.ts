
const express = require('express')
import {handler4029} from "./handler4029";
const app = express()
app.get('/4029', handler4029)
app.listen(3000, () => {})
        