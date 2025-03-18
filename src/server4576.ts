
const express = require('express')
import {handler4576} from "./handler4576";
const app = express()
app.get('/4576', handler4576)
app.listen(3000, () => {})
        