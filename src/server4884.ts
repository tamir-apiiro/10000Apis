
const express = require('express')
import {handler4884} from "./handler4884";
const app = express()
app.get('/4884', handler4884)
app.listen(3000, () => {})
        