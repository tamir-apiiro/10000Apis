
const express = require('express')
import {handler4289} from "./handler4289";
const app = express()
app.get('/4289', handler4289)
app.listen(3000, () => {})
        