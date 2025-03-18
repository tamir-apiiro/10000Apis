
const express = require('express')
import {handler4547} from "./handler4547";
const app = express()
app.get('/4547', handler4547)
app.listen(3000, () => {})
        