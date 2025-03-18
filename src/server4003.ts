
const express = require('express')
import {handler4003} from "./handler4003";
const app = express()
app.get('/4003', handler4003)
app.listen(3000, () => {})
        