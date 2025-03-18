
const express = require('express')
import {handler4865} from "./handler4865";
const app = express()
app.get('/4865', handler4865)
app.listen(3000, () => {})
        