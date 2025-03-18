
const express = require('express')
import {handler4318} from "./handler4318";
const app = express()
app.get('/4318', handler4318)
app.listen(3000, () => {})
        