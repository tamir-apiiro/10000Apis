
const express = require('express')
import {handler7317} from "./handler7317";
const app = express()
app.get('/7317', handler7317)
app.listen(3000, () => {})
        