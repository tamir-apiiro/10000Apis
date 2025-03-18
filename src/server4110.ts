
const express = require('express')
import {handler4110} from "./handler4110";
const app = express()
app.get('/4110', handler4110)
app.listen(3000, () => {})
        