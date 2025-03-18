
const express = require('express')
import {handler4407} from "./handler4407";
const app = express()
app.get('/4407', handler4407)
app.listen(3000, () => {})
        