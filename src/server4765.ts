
const express = require('express')
import {handler4765} from "./handler4765";
const app = express()
app.get('/4765', handler4765)
app.listen(3000, () => {})
        