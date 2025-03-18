
const express = require('express')
import {handler4630} from "./handler4630";
const app = express()
app.get('/4630', handler4630)
app.listen(3000, () => {})
        