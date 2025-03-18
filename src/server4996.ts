
const express = require('express')
import {handler4996} from "./handler4996";
const app = express()
app.get('/4996', handler4996)
app.listen(3000, () => {})
        