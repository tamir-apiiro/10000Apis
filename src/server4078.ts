
const express = require('express')
import {handler4078} from "./handler4078";
const app = express()
app.get('/4078', handler4078)
app.listen(3000, () => {})
        