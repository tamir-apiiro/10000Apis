
const express = require('express')
import {handler954} from "./handler954";
const app = express()
app.get('/954', handler954)
app.listen(3000, () => {})
        