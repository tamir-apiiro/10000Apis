
const express = require('express')
import {handler4897} from "./handler4897";
const app = express()
app.get('/4897', handler4897)
app.listen(3000, () => {})
        