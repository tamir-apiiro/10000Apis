
const express = require('express')
import {handler562} from "./handler562";
const app = express()
app.get('/562', handler562)
app.listen(3000, () => {})
        