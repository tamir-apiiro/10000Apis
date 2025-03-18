
const express = require('express')
import {handler4973} from "./handler4973";
const app = express()
app.get('/4973', handler4973)
app.listen(3000, () => {})
        