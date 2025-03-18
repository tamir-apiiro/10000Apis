
const express = require('express')
import {handler4934} from "./handler4934";
const app = express()
app.get('/4934', handler4934)
app.listen(3000, () => {})
        