
const express = require('express')
import {handler4980} from "./handler4980";
const app = express()
app.get('/4980', handler4980)
app.listen(3000, () => {})
        