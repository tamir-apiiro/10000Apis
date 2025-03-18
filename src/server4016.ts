
const express = require('express')
import {handler4016} from "./handler4016";
const app = express()
app.get('/4016', handler4016)
app.listen(3000, () => {})
        