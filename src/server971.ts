
const express = require('express')
import {handler971} from "./handler971";
const app = express()
app.get('/971', handler971)
app.listen(3000, () => {})
        