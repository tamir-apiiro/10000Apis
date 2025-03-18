
const express = require('express')
import {handler7954} from "./handler7954";
const app = express()
app.get('/7954', handler7954)
app.listen(3000, () => {})
        