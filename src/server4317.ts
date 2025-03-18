
const express = require('express')
import {handler4317} from "./handler4317";
const app = express()
app.get('/4317', handler4317)
app.listen(3000, () => {})
        