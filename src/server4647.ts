
const express = require('express')
import {handler4647} from "./handler4647";
const app = express()
app.get('/4647', handler4647)
app.listen(3000, () => {})
        