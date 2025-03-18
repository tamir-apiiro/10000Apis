
const express = require('express')
import {handler4226} from "./handler4226";
const app = express()
app.get('/4226', handler4226)
app.listen(3000, () => {})
        