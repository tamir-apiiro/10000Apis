
const express = require('express')
import {handler4948} from "./handler4948";
const app = express()
app.get('/4948', handler4948)
app.listen(3000, () => {})
        