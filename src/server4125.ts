
const express = require('express')
import {handler4125} from "./handler4125";
const app = express()
app.get('/4125', handler4125)
app.listen(3000, () => {})
        