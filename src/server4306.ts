
const express = require('express')
import {handler4306} from "./handler4306";
const app = express()
app.get('/4306', handler4306)
app.listen(3000, () => {})
        