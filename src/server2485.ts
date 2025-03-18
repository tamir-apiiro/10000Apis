
const express = require('express')
import {handler2485} from "./handler2485";
const app = express()
app.get('/2485', handler2485)
app.listen(3000, () => {})
        