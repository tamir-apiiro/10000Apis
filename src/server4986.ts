
const express = require('express')
import {handler4986} from "./handler4986";
const app = express()
app.get('/4986', handler4986)
app.listen(3000, () => {})
        