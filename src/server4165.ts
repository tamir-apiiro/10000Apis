
const express = require('express')
import {handler4165} from "./handler4165";
const app = express()
app.get('/4165', handler4165)
app.listen(3000, () => {})
        