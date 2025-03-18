
const express = require('express')
import {handler4126} from "./handler4126";
const app = express()
app.get('/4126', handler4126)
app.listen(3000, () => {})
        