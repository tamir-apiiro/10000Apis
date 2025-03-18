
const express = require('express')
import {handler4664} from "./handler4664";
const app = express()
app.get('/4664', handler4664)
app.listen(3000, () => {})
        