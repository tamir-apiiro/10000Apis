
const express = require('express')
import {handler4412} from "./handler4412";
const app = express()
app.get('/4412', handler4412)
app.listen(3000, () => {})
        