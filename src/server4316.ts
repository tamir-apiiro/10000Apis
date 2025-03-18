
const express = require('express')
import {handler4316} from "./handler4316";
const app = express()
app.get('/4316', handler4316)
app.listen(3000, () => {})
        