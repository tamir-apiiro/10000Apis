
const express = require('express')
import {handler4639} from "./handler4639";
const app = express()
app.get('/4639', handler4639)
app.listen(3000, () => {})
        