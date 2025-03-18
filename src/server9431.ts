
const express = require('express')
import {handler9431} from "./handler9431";
const app = express()
app.get('/9431', handler9431)
app.listen(3000, () => {})
        