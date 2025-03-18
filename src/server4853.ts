
const express = require('express')
import {handler4853} from "./handler4853";
const app = express()
app.get('/4853', handler4853)
app.listen(3000, () => {})
        