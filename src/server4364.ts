
const express = require('express')
import {handler4364} from "./handler4364";
const app = express()
app.get('/4364', handler4364)
app.listen(3000, () => {})
        