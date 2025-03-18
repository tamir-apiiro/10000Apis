
const express = require('express')
import {handler4683} from "./handler4683";
const app = express()
app.get('/4683', handler4683)
app.listen(3000, () => {})
        