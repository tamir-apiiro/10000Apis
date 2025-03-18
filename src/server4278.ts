
const express = require('express')
import {handler4278} from "./handler4278";
const app = express()
app.get('/4278', handler4278)
app.listen(3000, () => {})
        