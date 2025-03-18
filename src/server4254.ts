
const express = require('express')
import {handler4254} from "./handler4254";
const app = express()
app.get('/4254', handler4254)
app.listen(3000, () => {})
        