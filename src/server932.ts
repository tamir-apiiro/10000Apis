
const express = require('express')
import {handler932} from "./handler932";
const app = express()
app.get('/932', handler932)
app.listen(3000, () => {})
        