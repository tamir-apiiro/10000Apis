
const express = require('express')
import {handler4977} from "./handler4977";
const app = express()
app.get('/4977', handler4977)
app.listen(3000, () => {})
        