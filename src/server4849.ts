
const express = require('express')
import {handler4849} from "./handler4849";
const app = express()
app.get('/4849', handler4849)
app.listen(3000, () => {})
        