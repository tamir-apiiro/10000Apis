
const express = require('express')
import {handler4066} from "./handler4066";
const app = express()
app.get('/4066', handler4066)
app.listen(3000, () => {})
        