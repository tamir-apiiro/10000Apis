
const express = require('express')
import {handler4416} from "./handler4416";
const app = express()
app.get('/4416', handler4416)
app.listen(3000, () => {})
        