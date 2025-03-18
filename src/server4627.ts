
const express = require('express')
import {handler4627} from "./handler4627";
const app = express()
app.get('/4627', handler4627)
app.listen(3000, () => {})
        