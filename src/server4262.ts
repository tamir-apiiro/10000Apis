
const express = require('express')
import {handler4262} from "./handler4262";
const app = express()
app.get('/4262', handler4262)
app.listen(3000, () => {})
        