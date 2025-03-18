
const express = require('express')
import {handler4696} from "./handler4696";
const app = express()
app.get('/4696', handler4696)
app.listen(3000, () => {})
        