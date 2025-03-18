
const express = require('express')
import {handler4375} from "./handler4375";
const app = express()
app.get('/4375', handler4375)
app.listen(3000, () => {})
        