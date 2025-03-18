
const express = require('express')
import {handler4582} from "./handler4582";
const app = express()
app.get('/4582', handler4582)
app.listen(3000, () => {})
        