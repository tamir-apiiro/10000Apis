
const express = require('express')
import {handler4141} from "./handler4141";
const app = express()
app.get('/4141', handler4141)
app.listen(3000, () => {})
        