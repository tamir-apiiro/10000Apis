
const express = require('express')
import {handler4348} from "./handler4348";
const app = express()
app.get('/4348', handler4348)
app.listen(3000, () => {})
        