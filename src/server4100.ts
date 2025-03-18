
const express = require('express')
import {handler4100} from "./handler4100";
const app = express()
app.get('/4100', handler4100)
app.listen(3000, () => {})
        