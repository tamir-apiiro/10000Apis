
const express = require('express')
import {handler65} from "./handler65";
const app = express()
app.get('/65', handler65)
app.listen(3000, () => {})
        