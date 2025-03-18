
const express = require('express')
import {handler4707} from "./handler4707";
const app = express()
app.get('/4707', handler4707)
app.listen(3000, () => {})
        