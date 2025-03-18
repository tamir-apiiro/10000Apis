
const express = require('express')
import {handler4492} from "./handler4492";
const app = express()
app.get('/4492', handler4492)
app.listen(3000, () => {})
        