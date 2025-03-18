
const express = require('express')
import {handler4270} from "./handler4270";
const app = express()
app.get('/4270', handler4270)
app.listen(3000, () => {})
        