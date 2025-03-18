
const express = require('express')
import {handler4932} from "./handler4932";
const app = express()
app.get('/4932', handler4932)
app.listen(3000, () => {})
        