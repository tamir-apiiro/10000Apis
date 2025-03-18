
const express = require('express')
import {handler4004} from "./handler4004";
const app = express()
app.get('/4004', handler4004)
app.listen(3000, () => {})
        