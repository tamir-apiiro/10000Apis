
const express = require('express')
import {handler4759} from "./handler4759";
const app = express()
app.get('/4759', handler4759)
app.listen(3000, () => {})
        