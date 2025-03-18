
const express = require('express')
import {handler4086} from "./handler4086";
const app = express()
app.get('/4086', handler4086)
app.listen(3000, () => {})
        