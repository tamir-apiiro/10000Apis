
const express = require('express')
import {handler4883} from "./handler4883";
const app = express()
app.get('/4883', handler4883)
app.listen(3000, () => {})
        