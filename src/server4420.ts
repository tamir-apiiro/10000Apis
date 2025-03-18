
const express = require('express')
import {handler4420} from "./handler4420";
const app = express()
app.get('/4420', handler4420)
app.listen(3000, () => {})
        