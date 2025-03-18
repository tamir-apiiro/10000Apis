
const express = require('express')
import {handler897} from "./handler897";
const app = express()
app.get('/897', handler897)
app.listen(3000, () => {})
        