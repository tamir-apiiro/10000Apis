
const express = require('express')
import {handler4211} from "./handler4211";
const app = express()
app.get('/4211', handler4211)
app.listen(3000, () => {})
        