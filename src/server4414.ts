
const express = require('express')
import {handler4414} from "./handler4414";
const app = express()
app.get('/4414', handler4414)
app.listen(3000, () => {})
        