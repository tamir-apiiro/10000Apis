
const express = require('express')
import {handler2954} from "./handler2954";
const app = express()
app.get('/2954', handler2954)
app.listen(3000, () => {})
        