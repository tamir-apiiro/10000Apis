
const express = require('express')
import {handler317} from "./handler317";
const app = express()
app.get('/317', handler317)
app.listen(3000, () => {})
        