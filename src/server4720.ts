
const express = require('express')
import {handler4720} from "./handler4720";
const app = express()
app.get('/4720', handler4720)
app.listen(3000, () => {})
        