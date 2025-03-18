
const express = require('express')
import {handler4064} from "./handler4064";
const app = express()
app.get('/4064', handler4064)
app.listen(3000, () => {})
        