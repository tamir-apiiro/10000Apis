
const express = require('express')
import {handler4609} from "./handler4609";
const app = express()
app.get('/4609', handler4609)
app.listen(3000, () => {})
        