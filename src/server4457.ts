
const express = require('express')
import {handler4457} from "./handler4457";
const app = express()
app.get('/4457', handler4457)
app.listen(3000, () => {})
        