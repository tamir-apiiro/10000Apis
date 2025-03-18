
const express = require('express')
import {handler4435} from "./handler4435";
const app = express()
app.get('/4435', handler4435)
app.listen(3000, () => {})
        