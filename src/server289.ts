
const express = require('express')
import {handler289} from "./handler289";
const app = express()
app.get('/289', handler289)
app.listen(3000, () => {})
        