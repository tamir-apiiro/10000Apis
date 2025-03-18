
const express = require('express')
import {handler4361} from "./handler4361";
const app = express()
app.get('/4361', handler4361)
app.listen(3000, () => {})
        