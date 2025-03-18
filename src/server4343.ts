
const express = require('express')
import {handler4343} from "./handler4343";
const app = express()
app.get('/4343', handler4343)
app.listen(3000, () => {})
        