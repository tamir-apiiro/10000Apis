
const express = require('express')
import {handler4085} from "./handler4085";
const app = express()
app.get('/4085', handler4085)
app.listen(3000, () => {})
        