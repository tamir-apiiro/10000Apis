
const express = require('express')
import {handler4419} from "./handler4419";
const app = express()
app.get('/4419', handler4419)
app.listen(3000, () => {})
        