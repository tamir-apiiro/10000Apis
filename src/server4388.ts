
const express = require('express')
import {handler4388} from "./handler4388";
const app = express()
app.get('/4388', handler4388)
app.listen(3000, () => {})
        