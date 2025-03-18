
const express = require('express')
import {handler4061} from "./handler4061";
const app = express()
app.get('/4061', handler4061)
app.listen(3000, () => {})
        