
const express = require('express')
import {handler4840} from "./handler4840";
const app = express()
app.get('/4840', handler4840)
app.listen(3000, () => {})
        